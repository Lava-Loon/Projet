# Mission : Maîtriser le Layout Responsive (LG)

L'objectif est de contrôler ce qui s'affiche sur ton écran quand il est grand (`lg`). 

Actuellement, sur `lg`, ton application affiche deux choses côte à côte :
1. La liste d'utilisateurs (`UserList`) à gauche.
2. Un écran vide (`EmptyState`) à droite.

Tu veux que l'écran de droite (la conversation) ne s'affiche **que si tu as choisi quelqu'un**.

## Comprendre la structure actuelle :

### 1. Le Conteneur (`app/users/layout.tsx`)
C'est ici qu'on définit que `UserList` et la page (le contenu de droite) habitent ensemble.
- `UserList` est fixé à gauche.
- `{children}` (la page) est poussé à droite par un `lg:pl-80`.

### 2. Le Contenu de droite (`app/users/page.tsx`)
C'est le fichier qui affiche le `EmptyState`.
- Actuellement, il a la classe `lg:block`. Cela veut dire : "Affiche-toi toujours sur les grands écrans".

---

## Tes deux options pour "Basculer" :

### Option A : Utiliser le Routing Next.js (La méthode Messenger)
Dans cette méthode, tu crées une nouvelle page pour les conversations.
- Quand l'URL est `/users`, Next.js affiche `app/users/page.tsx` (le vide).
- Quand tu cliques, tu vas sur `/conversations/[id]`, et Next.js affiche une **autre** page.

### Option B : Utiliser un État (`useState`)
Si tu n'as pas encore créé le dossier `conversations`, tu peux utiliser un état dans `layout.tsx` pour dire si un utilisateur est sélectionné.

---

## Ton premier petit défi :
Si tu veux que sur `lg`, l'écran de droite soit masqué au début :
1. Ouvre `app/users/page.tsx`.
2. Essaie de changer `lg:block` par une autre classe Tailwind qui cache l'élément (ex: `lg:hidden`).

**Cependant**, si tu caches cet élément sur `lg`, tu auras un grand trou vide à droite. Dans Messenger, on préfère généralement que la liste des utilisateurs prenne toute la place si rien n'est sélectionné.

**Que veux-tu faire ?** 
- Préfères-tu qu'on crée ensemble le dossier `/conversations` pour faire une "vraie" bascule ?
- Ou veux-tu juste voir comment masquer des éléments sur `lg` ?
