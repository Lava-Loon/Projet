# Exercice 3 : Gestion d'État (Interaction)

Maintenant qu'on sait afficher des données, on va apprendre à les **modifier** quand l'utilisateur clique. Dans ton projet Messenger, c'est ce qui se passe quand tu cliques sur une conversation pour l'ouvrir.

## Nouveaux concepts TypeScript :
1.  **useState avec Generic** : Comment dire à un état qu'il ne peut accepter que certains types (ex: `useState<UserStatus>`).
2.  **Gestion d'Événements** : Typer les fonctions de clic.

## Ton objectif :
Créer un composant `StatusManager` qui affiche ton statut actuel et permet de le changer en cliquant sur des boutons.

### Fichier : `StatusManager.tsx`

1.  **Définition du type** : Importe ou crée le type `UserStatus = 'online' | 'offline' | 'away'`.
2.  **L'État** : Utilise `useState` pour stocker le statut actuel.
    - Indice : `const [status, setStatus] = useState<UserStatus>('online');`
3.  **L'Affichage** :
    - Affiche "Mon statut est : [Statut actuel]".
    - Crée 3 boutons (un pour chaque statut).
    - Au clic sur un bouton, le statut doit se mettre à jour.

---

### Challenge Bonus 🏆 :
Ajoute un compteur (un simple nombre) qui augmente de 1 à chaque fois que tu changes de statut. N'oublie pas de typer cet état aussi !
