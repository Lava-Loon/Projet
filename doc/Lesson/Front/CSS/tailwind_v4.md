# Syntaxe Tailwind CSS v4

Tailwind CSS v4 simplifie radicalement la configuration en utilisant des directives CSS standard.

## Installation / Importation

@import "tailwindcss"; : Remplace l'ancienne méthode avec plusieurs imports `@tailwind base;`, `@tailwind components;`, etc. Cette ligne suffit à charger tout Tailwind dans votre fichier `globals.css`.

## Configuration

Dans Tailwind v4, vous n'avez plus forcément besoin d'un fichier `tailwind.config.js`. Vous pouvez configurer vos variables directement dans le CSS en utilisant les variables CSS standard.

## Classes Utilitaires (Rappels)

- sm: , lg: : Préfixes pour le responsive (Mobile First).
- flex, flex-col, items-center : Pour créer des mises en page flexibles.
- shadow : Ajoute une ombre portée.
- rounded-md, rounded-lg : Pour les coins arrondis.
- bg-gray-100, text-white : Couleurs de fond et de texte.
- gap-x-3, space-y-6 : Gestion des espacements entre les éléments.
