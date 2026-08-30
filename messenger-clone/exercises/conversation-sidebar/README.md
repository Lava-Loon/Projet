# Exercice 8 : Le Sélecteur de Conversations

C'est l'exercice qui va te préparer directement à ton projet Messenger. On va simuler la **Sidebar** (la colonne de gauche) où tu vois tes discussions.

## Objectif :
Créer une liste de conversations. Quand tu cliques sur une conversation :
1. Elle devient **"Active"** (elle change de couleur de fond).
2. Son nom s'affiche en grand dans la zone principale.

## Nouveaux concepts :
1. **L'ID de sélection** : Stocker l'ID de l'élément cliqué au lieu de l'objet entier.
2. **Comparaison d'ID** : `isActive = currentId === selectedId`.

## Structure des fichiers :
1. `ConversationSidebar.tsx` : Le patron qui contient la liste et l'état `selectedId`.
2. `ConversationItem.tsx` : Le petit composant pour chaque ligne de discussion.

---

### Challenge :
Affiche un petit cercle bleu 🔵 à côté du nom uniquement si la conversation n'est pas lue (`isUnread: true`).

**C'est l'étape ultime avant de retourner sur ton vrai projet pour de bon !**
