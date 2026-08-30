# JavaScript Moderne (ES6+)

## Variables
- `const`: Constante (ne peut pas être réassignée) - À utiliser par défaut
- `let`: Variable (peut être réassignée)
- `var`: Ancien standard (éviter si possible, portée fonction)

## Fonctions Fléchées (Arrow Functions)
```javascript
// Avant
function addition(a, b) {
  return a + b;
}

// Maintenant
const addition = (a, b) => a + b;
```

## Template Literals
```javascript
const nom = "Andii";
console.log(`Bonjour ${nom} !`); // Utilisation des backticks ``
```

## Déstructuration
```javascript
// Objets
const user = { nom: "Andii", age: 25 };
const { nom, age } = user;

// Tableaux
const coords = [10, 20];
const [x, y] = coords;
```

## Spread Operator (...)
```javascript
const tab1 = [1, 2];
const tab2 = [...tab1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

## Méthodes de Tableaux
- `.map()`: Crée un nouveau tableau en transformant chaque élément
  ```javascript
  const double = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
  ```
- `.filter()`: Crée un tableau avec les éléments qui respectent une condition
  ```javascript
  const pairs = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
  ```
- `.find()` : Trouve un objet précis dans une liste (souvent par son ID).
  ```javascript
  const item = list.find(element => element.id === targetId);
  ```
- **Recherche insensible à la casse** : Combiner `.toLowerCase()` et `.includes()`.
  ```javascript
  const isMatch = stringA.toLowerCase().includes(stringB.toLowerCase());
  ```
- `.forEach()`: Exécute une fonction pour chaque élément
- `.reduce()`: Réduit le tableau à une seule valeur (ex: somme)

## Async / Await (Promesses)
Permet de gérer l'asynchrone de manière plus lisible.
```javascript
async function getData() {
  try {
    const response = await fetch('https://api.monsite.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur", error);
  }
}
```

## Manipulation du DOM
- `document.querySelector('.classe')`: Sélectionne le premier élément correspondant
- `document.querySelectorAll('div')`: Sélectionne tous les éléments correspondants (NodeList)
- `element.addEventListener('click', () => { ... })`: Ajoute un écouteur d'événement
- `element.classList.add('active')` / `.remove()` / `.toggle()`: Gère les classes CSS
- `element.textContent = "Nouveau texte"`: Modifie le texte

## Stockage Local (LocalStorage)
Permet de sauvegarder des données dans le navigateur (reste après fermeture).
- `localStorage.setItem('cle', 'valeur')`: Sauvegarde
- `localStorage.getItem('cle')`: Récupère
- `localStorage.removeItem('cle')`: Supprime
- `localStorage.clear()`: Tout vider

## JSON
- `JSON.stringify(objet)`: Convertit un objet JS en chaîne de caractères (pour l'envoyer ou le stocker)
- `JSON.parse(chaine)`: Convertit une chaîne JSON en objet JS

## Opérateurs Logiques utiles
- `condition ? vrai : faux` (Ternaire): Si condition est vraie, retourne 'vrai', sinon 'faux'
- `valeur || 'défaut'`: Si valeur est fausse (null, undefined, 0, ''), utilise 'défaut'
- `valeur && fonction()`: Si valeur est vraie, exécute la fonction
- `objet?.propriete`: (Optional Chaining) Accède à la propriété seulement si l'objet existe (évite les erreurs)
