# CSS: Sélecteurs et Layout

## Sélecteurs de base
- `*`: Tous les éléments
- `div`: Tous les éléments <div> (sélecteur de type)
- `.classe`: Tous les éléments avec la classe "classe"
- `#id`: L'élément avec l'ID "id"
- `div p`: Tous les <p> qui sont descendants de <div>
- `div > p`: Tous les <p> qui sont enfants directs de <div>
- `p:hover`: Au survol de la souris
- `p:first-child`: Le premier enfant

## Flexbox (display: flex)
Idéal pour les mises en page unidirectionnelles (ligne ou colonne).

### Conteneur (Parent)
- `flex-direction: row | column`: Direction des éléments
- `justify-content`: Alignement sur l'axe principal
  - `flex-start`: Début
  - `center`: Centre
  - `space-between`: Espace égal entre les éléments
- `align-items`: Alignement sur l'axe secondaire (croisé)
  - `stretch`: Étire (défaut)
  - `center`: Centre
  - `flex-start`: Début
- `flex-wrap: wrap`: Permet le retour à la ligne

### Éléments (Enfants)
- `flex-grow: 1`: L'élément grandit pour remplir l'espace
- `align-self: center`: S'aligne différemment des autres

## Grid (display: grid)
Idéal pour les mises en page bidirectionnelles (lignes et colonnes).

### Conteneur
- `grid-template-columns: 1fr 2fr`: Définit les colonnes (ici 1 fraction et 2 fractions)
- `grid-template-rows: 100px auto`: Définit les lignes
- `gap: 10px`: Espace entre les cellules
- `grid-template-areas`: Définit des zones nommées pour le layout

### Éléments
- `grid-column: 1 / 3`: Occupe de la colonne 1 à 3
- `grid-row: 1 / span 2`: Occupe 2 lignes à partir de la ligne 1
- `grid-area: nom`: Assigne l'élément à une zone nommée

## Positionnement et Affichage
- `position: relative`: Positionne par rapport à sa place normale (permet d'utiliser top/left)
- `position: absolute`: Positionne par rapport au parent positionné le plus proche (ou body)
- `position: fixed`: Positionne par rapport à la fenêtre du navigateur (reste fixe au scroll)
- `z-index: 10`: Définit l'empilement (plus grand = au-dessus)
- `display: none`: Cache l'élément (ne prend plus de place)
- `visibility: hidden`: Cache l'élément (mais garde la place)
- `overflow: hidden`: Cache ce qui dépasse du conteneur
- `cursor: pointer`: Change le curseur en main (pour les boutons)

## Responsive Design (Media Queries)
Adapte le style selon la taille de l'écran.
```css
@media (max-width: 768px) {
  .ma-classe {
    flex-direction: column; /* Passe en colonne sur mobile */
    font-size: 14px;
  }
}
```

## Pseudo-classes utiles
- `:nth-child(2)`: Cible le 2ème enfant
- `:nth-child(odd/even)`: Cible les enfants impairs/pairs
- `:not(.active)`: Cible les éléments qui N'ONT PAS la classe "active"
- `:focus`: Quand l'élément est sélectionné (clic ou tabulation)
- `:disabled`: Quand un champ de formulaire est désactivé
