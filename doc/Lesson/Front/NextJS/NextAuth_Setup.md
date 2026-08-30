# Configuration NextAuth (Messenger Clone)

Ce document détaille la mise en place de l'authentification avec NextAuth.js v4 dans le projet `messenger-clone`, en utilisant l'adaptateur Prisma pour persister les sessions.

## 1. Route d'API (`app/api/auth/[...nextauth]/route.ts`)

La configuration principale se fait dans ce fichier.

```typescript
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  // Adaptateur pour lier NextAuth à la base de données via Prisma
  adapter: PrismaAdapter(prisma),
  
  // Fournisseurs d'authentification
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    
    // Connexion par Email/Mot de passe
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 1. Vérifier si les infos sont présentes
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // 2. Trouver l'utilisateur en BDD
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // 3. Vérifier si l'utilisateur existe et a un mot de passe (cas OAuth sans MDP)
        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        // 4. Comparer le mot de passe hashé
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  // Afficher les logs en développement
  debug: process.env.NODE_ENV === "development",
  
  // Utiliser JWT pour la session (plus scalable, moins d'appels BDD session)
  session: { strategy: "jwt" },
  
  // Secret pour signer les tokens
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

## 2. Middleware (`middleware.ts`)

Pour protéger les routes, on utilise le middleware par défaut de NextAuth.

```typescript
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // Redirection si non authentifié
  },
});

export const config = {
  matcher: [
    "/users/:path*", // Protéger toutes les routes sous /users
    "/conversations/:path*" // Protéger toutes les routes sous /conversations
  ]
};
```

## 3. SessionProvider (`app/context/AuthContext.tsx`)

Pour accéder à la session côté client (via `useSession`), il faut envelopper l'application.

```typescript
'use client'; 

import { SessionProvider } from "next-auth/react";

// ...code wrapper...
```
