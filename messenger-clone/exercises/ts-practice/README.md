# Exercice : Système de Notification de Message

L'objectif est de créer un petit système qui formate et affiche une notification de message.

## Tes fichiers dans `messenger-clone/exercises/ts-practice/` :

1.  **`types.ts`** : Tu dois y définir une interface `Message`.
2.  **`utils.ts`** : Tu dois y créer une fonction qui vérifie si le message est long.
3.  **`Notification.tsx`** : Tu dois créer un composant qui affiche le message avec son statut.

## Les consignes :

### 1. Dans `types.ts`
Crée une interface `Message` avec :
- `id` (string)
- `sender` (string)
- `content` (string)
- `isRead` (boolean)
- `timestamp` (un nombre ou une date)

### 2. Dans `utils.ts`
Importe l'interface et crée une fonction `formatPreview` :
- Elle prend un `Message` en paramètre.
- Si le contenu fait plus de 20 caractères, elle renvoie les 20 premiers + "...".
- Sinon, elle renvoie le contenu complet.

### 3. Dans `Notification.tsx`
Crée un composant React qui prend une prop `message` (de type `Message`).
- Affiche le nom de l'envoyeur en gras.
- Affiche l'aperçu du message (utilise ta fonction `formatPreview`).
- Affiche un petit point bleu si `isRead` est faux.

---

**C'est à toi ! Crée ces fichiers dans le dossier et dis-moi quand tu as fini pour que je regarde.**
