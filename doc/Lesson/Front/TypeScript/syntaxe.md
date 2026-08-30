interface User { ... } : Définit la structure (le "contrat") d'un objet. Exemple : un User doit avoir un id et un nom.

: string / : number / : boolean : Types explicites. Indique qu'une variable ou paramètre DOIT être du texte, un nombre, ou vrai/faux.

: React.ReactNode : Type utilisé pour représenter n'importe quel élément que React peut afficher (HTML, texte, composants...).

children?: React.ReactNode : Le `?` signifie que la propriété est optionnelle.

as : "Type Assertion". Force le compilateur à considérer une variable comme étant d'un type précis (ex: `button as HTMLButtonElement`).

export default function ... : Rend la fonction disponible pour être importée ailleurs. Une seule exportation par défaut par fichier.
