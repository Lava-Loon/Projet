# Mission : Recherche de Contacts Interactive

L'objectif est d'ajouter une barre de recherche en haut de ta liste d'utilisateurs (`UserList.tsx`) pour filtrer tes amis instantanément. 

C'est ici que tu appliques tout ce qu'on a vu en exercice sur un **vrai projet professionnel**.

## Ton plan d'action (Étape par étape) :

### 1. Préparer l'État (`useState`)
Dans `UserList.tsx`, importe `useState` et crée une variable pour stocker ce que l'utilisateur tape.
- Rappelle-toi : `const [search, setSearch] = useState('');`

### 2. Ajouter l'Input (Le Visuel)
Ajoute un champ de texte `<input />` dans le code HTML (JSX). 
- **Où ?** Juste en dessous du titre "Rappa".
- **Comment ?** Utilise `value={search}` et `onChange={(e) => setSearch(e.target.value)}`.
- **Style** : Tu peux utiliser des classes Tailwind comme `w-full`, `p-2`, `bg-neutral-100`, `rounded-md`.

### 3. Créer la liste filtrée (La Logique)
Juste avant le `return`, crée une variable qui contient uniquement les utilisateurs dont le nom contient ta recherche.
- **Rappelle-toi** : Utilise `items.filter(...)` avec `.toLowerCase()`.

### 4. Brancher l'affichage
Dans ton code, il y a déjà un `{items.map(...)}`. 
- **Action** : Remplace `items.map` par `taVariableFiltrée.map`.

---

## Pourquoi c'est important ?
Dans un vrai projet comme celui-ci, `items` vient de ta base de données Prisma. En faisant ce filtrage, tu rends ton application fluide et agréable à utiliser pour tes futurs utilisateurs !

**Allez, ouvre `UserList.tsx` et commence par l'import du `useState`. C'est l'étape 1 !** 🚀
