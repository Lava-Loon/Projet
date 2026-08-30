# Exercice 7 : Gestion Interactive de Liste

Maintenant que tu sais afficher des messages, on va apprendre à interagir avec eux : les **liker** ou les **supprimer**. C'est crucial pour gérer les conversations dans Messenger.

## Nouveaux concepts :
1. **Passage de fonctions en Props** : Comment dire au parent qu'un enfant a été cliqué.
2. **Mises à jour immuables** : Modifier une liste sans la "casser".

## Ton objectif :
Créer une liste d'éléments où chaque ligne possède un bouton "Supprimer" et un bouton "Like".

### 1. `ItemRow.tsx`
Ce composant reçoit :
- `item`: { id: string, label: string, isLiked: boolean }
- `onDelete`: (id: string) => void (Une fonction !)
- `onToggleLike`: (id: string) => void

### 2. `ItemManager.tsx`
- Crée un état `items` (le tableau initial).
- Crée une fonction `handleDelete(id)` : utilise `.filter()` pour enlever l'élément.
- Crée une fonction `handleToggleLike(id)` : utilise `.map()` pour trouver l'élément et inverser `isLiked`.

---

### Challenge :
Fais en sorte que si un message est "Liké", son titre devienne **gras** et **bleu**.

**C'est l'exercice qui transforme tes composants "statiques" en une vraie application interactive.**
