# Exercice 2 : Dashboard Utilisateurs

L'objectif est de gérer une liste d'utilisateurs et de pouvoir les filtrer par statut.

## Nouveaux concepts TypeScript :
1.  **Union Types** : Créer un type qui n'accepte que certaines valeurs (ex: 'online' | 'offline').
2.  **Typage des Tableaux** : Apprendre à déclarer une liste d'objets (ex: `User[]`).
3.  **Mapping** : Afficher une liste de composants en bouclant sur un tableau.

## Tes fichiers dans `messenger-clone/exercises/user-dashboard/` :

### 1. `types.ts`
- Crée un type `UserStatus` qui peut être soit `'online'`, `'offline'`, ou `'away'`.
- Crée une interface `User` avec `id`, `name`, `email` et `status` (de type `UserStatus`).

### 2. `UserCard.tsx`
- Crée un composant qui prend un `user` de type `User` en prop.
- Affiche le nom et le statut.
- Utilise une couleur différente pour le statut (ex: vert pour online, gris pour offline).

### 3. `UserDashboard.tsx`
- Ce composant reçoit une liste d'utilisateurs (`users: User[]`).
- Il doit utiliser `.map()` pour afficher une `UserCard` pour chaque utilisateur de la liste.

---

**C'est un peu plus dur, mais c'est exactement ce que tu fais dans ton application Messenger Clone ! Prends ton temps.**
