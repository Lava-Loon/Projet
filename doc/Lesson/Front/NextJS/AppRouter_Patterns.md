# Modèles Next.js App Router (Messager Clone)

Ce document résume les nouveaux modèles de syntaxe et d'architecture utilisés dans le projet `messenger-clone` avec Next.js 13+ (App Router).

## 1. Routes API (`app/api/.../route.ts`)

Dans l'App Router, les API sont définies dans des fichiers `route.ts`.

### Exemple: Route POST (`app/api/register/route.ts`)

```typescript
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Lire le corps de la requête
    const { email, name, password } = body;

    // Validation
    if (!email || !name || !password) {
      return new NextResponse('Missing info', { status: 400 });
    }

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Création en base de donnée
    const user = await prisma.user.create({
      data: { email, name, hashedPassword }
    });

    return NextResponse.json(user); // Réponse JSON Succès
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
};
```

**Points Clés:**
- Nom de la fonction = Méthode HTTP (`POST`, `GET`, etc.).
- `NextResponse` pour retourner des réponses standardisées.
- `request.json()` est une Promise.

## 2. Server Actions / Utils (`app/actions/...`)

Utilisation de fonctions asynchrones côté serveur pour récupérer des données directement dans les Server Components, sans passer par une API REST interne.

### Exemple: Récupération de Session (`app/actions/getSession.ts`)

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOptions);
}
```

### Exemple: Récupération de l'Utilisateur Actuel (`app/actions/getCurrentUser.ts`)

Pattern pour sécuriser l'accès aux données utilisateur sans exposer l'API.

```typescript
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string }
    });

    // ... (traitement éventuel des dates pour éviter les warnings de sérialisation) ...

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
```

## 3. Context Providers ("use client")

Pour utiliser des fonctionnalités React (comme `useState`, `useEffect`, ou des librairies de contexte comme `NextAuth SessionProvider` ou `Toaster`) dans l'App Router, on doit créer un composant client wrapper.

### Exemple: AuthContext (`app/context/AuthContext.tsx`)

```typescript
'use client'; // Obligatoire pour utiliser SessionProvider

import { SessionProvider } from "next-auth/react";

interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

**Utilisation:** Ce contexte enveloppe l'application dans `app/layout.tsx`.
