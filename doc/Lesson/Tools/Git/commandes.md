staging area : est une zone intermédiaire où les fichiers modifiés sont préparés avant d'etre validés dans l'historique Git

commit : est un enregistrement qui sauvegarde les modifications apportés aux fichiers suivis,ainsi qu'un message pour décrire ces changements

git init : crée un dépot git

git status : affiche l'état actuel du dépôt

.gitignore : indique à git quels fichiers ou dossiers ne doivent pas etre suivis ou ajoutés au dépôt

git log : affiche l'historique des commits et les modifications effectués dans un dépôt Git

git clone : copie un dépôt Git existant sur la machine

git add : ajoute des fichiers ou des modifications au staging area pour le prochain commit

git commit : Valide les modifications dans l'historique de Git

git push : envoie les commits locaux vers un dépôt distant

git pull : récupère les modifications d'un dépôt distant et les fusionne avec la branche locale

git branch : gère et affiche les branches dans le dépôt

git switch / checkout : permet de changer de branche ou de restaurer des fichiers

git merge : fusionne une branche dans la branche actuelle

git fetch : récupère les mises à jour du dépôt distant,mais ne fusionne pas automatiquement avec la branche locale

git diff : montre les différences entre deux commits,ou entre l'espace de travail et la version indexée

git stash : met temporairement de côté les modifications non validées

git remote : gère les dépôts distants

git rm : supprime un fichier du suivi de Git

git log --oneline --graph --all : affiche un historique compact et graphique de toutes les branches

git restore <fichier> : annule les modifications non indexées d'un fichier (revient au dernier commit)

git restore --staged <fichier> : retire un fichier de l'index (staging area) sans perdre les modifs

git reset --soft HEAD~1 : annule le dernier commit mais garde les fichiers modifiés dans le staging

git reset --hard HEAD~1 : annule le dernier commit et supprime toutes les modifications (ATTENTION !)

git revert <commit_hash> : crée un nouveau commit qui inverse les changements d'un commit spécifique

git stash pop : réapplique les modifications mises de côté avec git stash et les supprime de la liste stash

git remote -v : affiche la liste des dépôts distants avec leurs URL

git config --global user.name "Nom" / user.email "email" : configure l'identité de l'utilisateur





