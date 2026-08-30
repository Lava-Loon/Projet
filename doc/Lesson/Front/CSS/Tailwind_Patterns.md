# Modèles Tailwind CSS (Messenger Clone)

Ce document résume les modèles de stylisation couramment utilisés dans le projet avec Tailwind CSS.

## 1. Classes Utilitaires pour Layouts Flexibles

Utilisation intensive de Flexbox pour aligner les éléments.

```tsx
<div className="
  hidden 
  lg:flex 
  lg:gap-x-2 
  lg:w-full 
  lg:block 
  lg:pl-80 
  h-full
">
  {/* Contenu principal */}
</div>
```

**Responsive Design:**
- `hidden`: Caché par défaut (mobile first).
- `lg:flex`: Flexbox à partir des grands écrans.
- `h-full`: Prend toute la hauteur disponible.

## 2. Style des Formulaires

Utilisation de `@tailwindcss/forms` pour réinitialiser les styles par défaut des navigateurs.

Dans `tailwind.config.mjs`:
```javascript
plugins: [
  require('@tailwindcss/forms')({
    strategy: 'class', // Appliquer les styles uniquement si la classe 'form-input', etc. est présente
  }),
],
```

Dans les composants (`app/components/inputs/Input.tsx`):

```tsx
<input 
  className={clsx(`
    form-input
    block 
    w-full 
    rounded-md 
    border-0 
    py-1.5 
    text-gray-900 
    shadow-sm 
    ring-1 
    ring-inset 
    ring-gray-300 
    placeholder:text-gray-400 
    focus:ring-2 
    focus:ring-inset 
    focus:ring-sky-600 
    sm:text-sm 
    sm:leading-6`,
    errors[id] && "focus:ring-rose-500", // Style conditionnel pour erreur
    disabled && "opacity-50 cursor-default" // Style conditionnel pour désactivé
  )}
/>
```

## 3. Gestion Conditionnelle des Classes (`clsx`)

Le projet utilise `clsx` (souvent combiné avec `tailwind-merge` dans d'autres projets, ici juste `clsx` dans les dépendances) pour construire dynamiquement les classes.

```typescript
import clsx from 'clsx';

// ...

className={clsx(
  "original-class",
  variable && "class-if-true",
  !variable && "class-if-false"
)}
```

Cela permet de garder le JSX propre et lisible.

## 4. Animations et Etats

Tailwind gère les états interactifs nativement.

- `hover:bg-gray-100`: Changement de fond au survol.
- `focus:ring-2`: Anneau de focus pour l'accessibilité.
- `active:bg-gray-200`: Au clic.
- `transition`: Pour lisser les changements.

```tsx
<button className="
  transition 
  duration-300 
  hover:scale-105
">
  Click me
</button>
```
