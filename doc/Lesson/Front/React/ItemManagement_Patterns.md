# Documentation : Gestion Interactive de Listes (CRUD React)

Dans l'exercice `ItemManager`, on utilise les 3 piliers de la manipulation de données en React. Voici le détail de chaque syntaxe.

## 1. Le Typage de l'État : `useState<Item[]>`
```tsx
const [items, setItems] = useState<Item[]>([]);
```
- **`<Item[]>`** : C'est une **Générique**. On dit à TypeScript : "Cette boîte `useState` ne contiendra pas n'importe quoi, elle contiendra un **Tableau d'objets de type Item**".
- Cela permet à VS Code de t'aider (auto-complétion) et d'empêcher les erreurs de frappe plus tard.

## 2. La Suppression (Le Filtrage)
```tsx
const handleDelete = (id: string) => {
  setItems(items.filter((item) => item.id !== id));
};
```
- **`.filter()`** : Cette méthode crée un **nouveau** tableau.
- **Logique** : "Garde tous les éléments, SAUF celui qui a cet ID".
- C'est la méthode standard pour supprimer un élément car en React, **on ne modifie jamais le tableau original** (Immuabilité).

## 3. La Modification (Le Mapping)
C'est la partie la plus subtile : inverser le "Like".
```tsx
setItems(items.map((item) => 
  item.id === id ? { ...item, isLiked: !item.isLiked } : item
));
```

### Étape par étape :
1. **`.map()`** : On parcourt toute la liste un par un.
2. **`item.id === id ?`** : "Est-ce que c'est l'élément que je veux modifier ?"
3. **Le Spread Operator (`...item`)** : 
   - On crée un **nouvel objet** qui est une copie exacte de l'ancien.
   - On "écrase" uniquement la propriété `isLiked`.
   - **`!item.isLiked`** : Le `!` inverse la valeur (Vrai devient Faux, Faux devient Vrai).
4. **`: item`** : Si ce n'est pas le bon ID, on renvoie l'élément tel quel, sans y toucher.

## Pourquoi tant d'efforts ? (L'Immuabilité)
En JavaScript classique, on ferait `item.isLiked = true`.
**En React, ça ne marche pas !** Si tu modifies l'objet directement, React ne verra pas le changement et ne mettra pas à jour l'écran. 

Il faut obligatoirement créer un **nouveau tableau** et de **nouveaux objets** pour que React comprenne qu'il doit redessiner l'interface.

---

> [!TIP]
> **Règle d'or** : 
> - Pour supprimer → `.filter()`
> - Pour modifier → `.map()` + `{ ...spread }`
> - Pour ajouter → `[...items, newItem]`
