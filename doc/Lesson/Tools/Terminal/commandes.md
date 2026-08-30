# Commandes Terminal Basics

## Navigation
- `pwd` : affiche la position actuelle du curseur (dossier courant)
- `ls` : affiche le contenu du dossier courant
- `ls -a` : affiche tout le contenu, y compris les fichiers cachés (commençant par .)
- `ls -l` : affiche les fichiers sous forme de liste détaillée (permissions, taille, date)
- `cd <dossier>` : change le répertoire courant vers <dossier>
- `cd ..` : remonte au dossier parent

## Gestion de fichiers
- `touch <fichier>` : crée un fichier vide
- `mkdir <dossier>` : crée un nouveau dossier
- `cp <source> <destination>` : copie un fichier ou un dossier (ajouter -r pour les dossiers)
- `mv <source> <destination>` : déplace ou renomme un fichier/dossier
- `rm <fichier>` : supprime un fichier
- `rm -r <dossier>` : supprime un dossier et son contenu
- `rm -rf <fichier/dossier>` : force la suppression sans confirmation (ATTENTION)

## Lecture et Édition
- `cat <fichier>` : affiche tout le contenu d'un fichier dans le terminal
- `less <fichier>` : affiche le contenu page par page
- `grep <mot> <fichier>` : recherche une chaîne de caractères dans un fichier
- `head <fichier>` : affiche les premières lignes d'un fichier
- `tail <fichier>` : affiche les dernières lignes d'un fichier

## Système et Divers
- `chmod <droits> <fichier>` : modifie les permissions d'accès
- `chown <user>:<group> <fichier>` : change le propriétaire du fichier
- `sudo <commande>` : exécute la commande avec les privilèges administrateur (root)
- `echo "texte"` : affiche du texte
- `history` : affiche l'historique des commandes exécutées
- `clear` : efface l'affichage du terminal
