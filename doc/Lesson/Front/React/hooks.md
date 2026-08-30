- useState: Permet de créer une variable d'état local (`const [count, setCount] = useState(0)`).
- useEffect: Exécute du code après le rendu (montage, mise à jour, nettoyage).
- useCallback: Mémorise une fonction pour éviter sa recréation à chaque rendu (optimisation).
- useMemo: Mémorise le résultat d'un calcul complexe.
- useRouter: Permet de naviguer vers une autre page (`router.push('/path')`).
- useParams: Récupère les paramètres de l'URL (ex: `conversationId`).
- usePathname: Récupère l'URL de la page actuelle.

### Modèles de Fonctions (CRUD) 🛠️

- **Ajouter un élément** (`const handleAdd = (newItem) => setList([...list, newItem])`) : Utilise le spread operator `...` pour créer un nouveau tableau avec le nouvel élément à la fin.
- **Modifier un élément** (`const handleToggle = (id) => setList(list.map((item) => item.id === id ? { ...item, status: !item.status } : item))`) : Utilise `.map()` pour parcourir la liste et une condition (ternaire) pour ne modifier que l'élément qui a le bon ID.
- **Supprimer un élément** (`const handleDelete = (id) => setList(list.filter((item) => item.id !== id))`) : Utilise `.filter()` pour garder uniquement les éléments dont l'ID est différent de celui qu'on veut supprimer.
- **Sélectionner un élément** (`const activeItem = list.find((item) => item.id === selectedId)`) : Utilise `.find()` pour extraire l'objet complet à partir de son ID.

### Autres syntaxes utiles
- {condition && <Composant />}: Affiche le composant si la condition est vraie.
- {condition ? <A /> : <B />}: Affiche A si vrai, B si faux.
- e.preventDefault(): Empêche le rechargement de la page lors de la soumission d'un formulaire.
- string.toLowerCase().includes(term.toLowerCase()): Recherche insensible à la casse.
