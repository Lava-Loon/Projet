# Exercice 6 : La Fenêtre de Chat

Dans cet exercice, on va créer la partie la plus importante visuellement : les **bulles de discussion**.

## Nouveaux concepts TypeScript & React :
1. **Style Conditionnel Avancé** : Comment aligner à droite mes messages et à gauche ceux des autres.
2. **Composition** : Passer un objet complexe à un sous-composant.

## Ton objectif :
Afficher une conversation entre deux personnes (Toi et un ami).

### 1. `types.ts`
- Crée une interface `Message` :
    - `id`: string
    - `text`: string
    - `senderId`: string
    - `createdAt`: Date

### 2. `MessageBubble.tsx`
Ce composant doit recevoir :
- `message`: Message
- `isOwn`: boolean (est-ce mon message ?)

**L'indice pour le style** :
Utilise `clsx` pour mettre le message à droite (`justify-end`) et en bleu si `isOwn` est vrai. Sinon, à gauche et en gris.

### 3. `ChatWindow.tsx`
- Crée une liste de messages (mélange les `senderId`).
- Définit un `currentUserId = "me"`.
- Mappe la liste et appelle `<MessageBubble />`.
- Calcule `isOwn` en comparant `message.senderId === currentUserId`.

---

**Ce composant est le cœur de ton projet Messenger. Si tu le réussis, tu sauras exactement comment les messages s'affichent dans l'application réelle !**
