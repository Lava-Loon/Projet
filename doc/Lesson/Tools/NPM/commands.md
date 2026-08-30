# Commandes NPM (Node Package Manager)

NPM est le gestionnaire de paquets par défaut pour Node.js. Voici les commandes essentielles.

## Initialisation et Installation
- `npm init -y` : Initialise un nouveau projet (crée `package.json`) avec les valeurs par défaut
- `npm install <nom_du_paquet>` (ou `npm i`) : Installe un paquet et l'ajoute aux dépendances (`package.json`)
- `npm install <nom_du_paquet> --save-dev` (ou `npm i -D`) : Installe un paquet comme dépendance de développement (ex: outils de test, linters)
- `npm install` : Installe toutes les dépendances listées dans `package.json`

## Scripts
- `npm run <nom_du_script>` : Exécute un script défini dans la section `scripts` du `package.json`
- `npm start` : Raccourci pour `npm run start` (souvent utilisé pour lancer le serveur)
- `npm test` : Raccourci pour `npm run test`
- `npm run dev` : Souvent utilisé pour lancer le mode développement (ex: avec nodemon ou vite)

## Gestion des paquets
- `npm list` : Liste les paquets installés
- `npm update` : Met à jour les paquets
- `npm uninstall <nom_du_paquet>` : Désinstalle un paquet
- `npm audt` : Analyse les vulnérabilités de sécurité
- `npm audit fix` : Tente de corriger automatiquement les vulnérabilités

## Npx
- `npx <commande>` : Exécute un binaire de paquet sans l'installer globalement (ex: `npx create-react-app mon-app`, `npx tailwindcss init`)
