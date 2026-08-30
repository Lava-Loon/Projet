# HTML Tags Essentiels

## Structure de base
- `<!DOCTYPE html>`: Définit le type de document
- `<html>`: Élément racine
- `<head>`: Contient les métadonnées (titre, liens CSS, scripts)
- `<body>`: Contient le contenu visible de la page

## Texte et Titres
- `<h1>` à `<h6>`: Titres (h1 étant le plus important)
- `<p>`: Paragraphe
- `<span>`: Conteneur en ligne (inline) pour styliser une partie de texte
- `<div>`: Conteneur bloc générique
- `<br>`: Saut de ligne
- `<hr>`: Ligne de séparation horizontale
- `<strong>`: Texte important (gras)
- `<em>`: Texte mis en phase (italique)

## Listes
- `<ul>`: Liste à puces (non ordonnée)
- `<ol>`: Liste numérotée (ordonnée)
- `<li>`: Élément de liste

## Liens et Médias
- `<a href="url">`: Lien hypertexte (ancre)
- `<img src="url" alt="description">`: Image
- `<video src="url" controls>`: Vidéo
- `<audio src="url" controls>`: Audio

## Formulaires
- `<form action="url" method="POST">`: Formulaire
- `<input type="text">`: Champ de saisie
- `<input type="password">`: Champ mot de passe
- `<input type="email">`: Champ email
- `<input type="checkbox">`: Case à cocher
- `<input type="radio">`: Bouton radio
- `<textarea>`: Zone de texte multi-lignes
- `<button type="submit">`: Bouton d'envoi
- `<label for="id">`: Étiquette pour un champ

## Sémantique (HTML5)
- `<header>`: En-tête de la page ou d'une section
- `<nav>`: Navigation
- `<main>`: Contenu principal
- `<section>`: Section thématique
- `<article>`: Contenu autonome (ex: article de blog)
- `<aside>`: Contenu connexe (ex: barre latérale)
- `<footer>`: Pied de page

## Tableaux
- `<table>`: Conteneur principal
- `<tr>`: Ligne (Table Row)
- `<th>`: En-tête de colonne (Table Header) - en gras par défaut
- `<td>`: Cellule de donnée (Table Data)
- `<thead>`: En-tête du tableau
- `<tbody>`: Corps du tableau

## Intégration et Meta
- `<iframe src="url">`: Affiche une autre page web (ex: Google Maps, YouTube)
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Essentiel pour le Responsive Design (mobile)
- `<meta name="description" content="...">`: Description pour les moteurs de recherche
- `<link rel="stylesheet" href="style.css">`: Lier un fichier CSS
- `<script src="script.js" defer>`: Lier un fichier JS (l'attribut `defer` est recommandé pour charger le script après le HTML)
