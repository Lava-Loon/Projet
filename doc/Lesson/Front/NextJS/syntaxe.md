app/ : Le dossier principal du "App Router" de Next.js. Chaque sous-dossier peut devenir une route (URL).

layout.tsx : Définit l'interface commune (la coquille) partagée par toutes les pages d'un dossier (ex: barre de navigation, police globale).

page.tsx : Le contenu spécifique d'une page accessible via une URL.

export const metadata = { ... } : Permet de définir le titre de la page, la description pour Google (SEO) sans toucher au HTML.

import { Inter } from 'next/font/google' : Outil automatique de Next.js pour charger des polices Google de manière optimisée (sans ralentir la page).

app/ (site)/ : Les parenthèses `(site)` créent un "Route Group". Cela permet d'organiser les fichiers sans ajouter de texte dans l'URL (ex: `/login` au lieu de `/(site)/login`).

app/api/auth/[...nextauth]/route.ts : Route dynamique "Catch-all" pour gérer toutes les étapes de l'authentification (login, logout, callback).

AuthOptions : Objet de configuration pour NextAuth (providers, adapter, secret).
  - `adapter: PrismaAdapter(prisma)` : Connecte NextAuth à la base de données via Prisma.
  - `session: { strategy: 'jwt' }` : Utilise des jetons JSON Web Token pour les sessions.

next-auth/react :
  - `useSession()` : Hook pour vérifier si l'utilisateur est connecté (`authenticated`, `loading`, `unauthenticated`).
  - `signIn('provider', { ... })` : Lance la connexion (ex: `github`, `google`, `credentials`).
  - `signOut()` : Déconnecte l'utilisateur.

next/navigation :
  - `useRouter()` : Permet de naviguer par code (ex: `router.push('/home')`).
  - `usePathname()` : Récupère l'URL actuelle (ex: pour savoir quel lien du menu est actif).
  - `useParams()` : Récupère les paramètres de l'URL (ex: `id` dans `/user/123`).

API Routes (app/api/.../route.ts) : Permet de créer son propre backend (serveur).
  - `export async function POST(request: Request) { ... }` : Gère une requête HTTP POST.
  - `await request.json()` : Lit les données envoyées par le client.
  - `NextResponse.json({...})` : Renvoie une réponse JSON (ex: succès, données).
  - `NextResponse('Erreur', { status: 400 })` : Renvoie une erreur avec un code HTTP.

middleware.ts : Code qui s'exécute AVANT chaque requête (ex: vérifier si l'utilisateur est connecté avant d'afficher la page).
