export default function NomComposant({ children }) { ... } : Un Composant Fonctionnel. C'est une brique de l'interface qui accepte des propriétés (props) et retourne du HTML (JSX).

{children} : Une propriété spéciale qui représente ce qu'on met À L'INTÉRIEUR des balises du composant (ex: `<AuthContext> CE QUI EST ICI </AuthContext>`).

return ( ... ) : Ce que le composant va afficher à l'écran. On écrit du JSX (qui ressemble à du HTML).

className="..." : En React, on utilise `className` au lieu de `class` pour le CSS.

import { useState } from 'react' : Un "Hook". Permet d'ajouter une mémoire (état) à un composant.
- `const [compteur, setCompteur] = useState(0)`

useEffect(() => { ... }, []) : Un "Hook" qui déclenche une action à un moment précis (ex: au chargement du composant).

<Composant /> : Appelle et affiche un autre composant.

'use client' : Directive Next.js/React indiquant que ce composant s'exécute dans le navigateur (nécessaire pour utiliser , , etc.).

useCallback(() => { ... }, [dependencies]) : Mémorise une fonction pour qu'elle ne soit pas recréée à chaque rendu, sauf si les dépendances changent. Optimise les performances.

useForm<Type>({ ... }) : (Librairie ). Gère les formulaires complexes facilement.
  - `register('nom')` : Connecte un input au formulaire.
  - `handleSubmit(onSubmit)` : Gère la soumission et passe les données propres.
  - `formState: { errors }` : Contient les erreurs de validation.

props : Données passées d'un parent à un enfant.
  - `interface Props { ... }` : Définit ce que le composant attend.
  - `const Comp: React.FC<Props> = ({ label }) => ...` : Déstructuration des props.

clsx('class1', condition && 'class2') : Permet d'ajouter des classes CSS dynamiquement (ex: rouge si erreur, gris sinon).

'use client' : Directive Next.js/React indiquant que ce composant s'exécute dans le navigateur (nécessaire pour utiliser `useState`, `onClick`, etc.).

useCallback(() => { ... }, [dependencies]) : Mémorise une fonction pour qu'elle ne soit pas recréée à chaque rendu, sauf si les dépendances changent. Optimise les performances.

useForm<Type>({ ... }) : (Librairie `react-hook-form`). Gère les formulaires complexes facilement.
  - `register('nom')` : Connecte un input au formulaire.
  - `handleSubmit(onSubmit)` : Gère la soumission et passe les données propres.
  - `formState: { errors }` : Contient les erreurs de validation.

props : Données passées d'un parent à un enfant.
  - `interface Props { ... }` : Définit ce que le composant attend.
  - `const Comp: React.FC<Props> = ({ label }) => ...` : Déstructuration des props.

