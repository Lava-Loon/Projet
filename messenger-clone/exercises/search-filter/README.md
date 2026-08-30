# Exercice 5 : Le Filtre de Recherche

Dans Messenger, tu as souvent une barre de recherche pour trouver un ami. Cet exercice va t'apprendre à filtrer une liste en temps réel pendant que tu tapes.

## Nouveau concept : La Logique Dérivée
C'est quand tu crées une nouvelle variable à partir d'autres. 
Exemple : `const result = maListe.filter(...)`. Tu n'as pas besoin d'un deuxième `useState` pour ça !

## Ton objectif :
Afficher une liste de contacts et une barre de recherche. La liste doit se mettre à jour toute seule.

### 1. `types.ts`
- Crée une interface `Contact` avec `id` (string) et `name` (string).

### 2. `SearchFilter.tsx`
- Crée une liste de contacts "en dur" (un tableau d'objets constant).
- Crée un état `searchTerm` (string).
- Crée une variable `filteredContacts` qui utilise `.filter()` sur ta liste pour ne garder que ceux dont le nom contient `searchTerm`.
- Affiche l'input et la liste filtrée.

### Indice pour le filtrage :
```typescript
const filtered = contacts.filter((c) => 
  c.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

---

**C'est une technique que tu utiliseras dans TOUS tes projets web. À toi de jouer !**
