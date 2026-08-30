# Exercice 4 : Message Composer (Formulaires & Async)

C'est l'exercice final de cette série ! On va simuler l'envoi d'un message dans une base de données.

## Nouveaux concepts TypeScript :
1.  **Handling Forms** : Typer les événements `onSubmit`.
2.  **Async/Await** : Simuler une attente (comme une vraie API).
3.  **Complex Objects** : Manipuler des objets imbriqués.

## Ton objectif :
Créer un formulaire d'envoi de message qui désactive le bouton pendant l'envoi.

### 1. `types.ts`
- Crée une interface `ChatMessage` avec `id`, `text`, et `status` ('sending' | 'sent' | 'error').

### 2. `MessageComposer.tsx`
- Crée un état `text` pour l'input (string).
- Crée un état `isSending` (boolean) pour savoir si on est en train d'envoyer.
- Crée une fonction `handleSubmit` :
    - Elle doit être `async`.
    - Elle doit passer `isSending` à `true`.
    - Elle doit faire un `await new Promise(res => setTimeout(res, 1000))` (simule un délai de 1s).
    - Elle doit vider l'input et repasser `isSending` à `false`.

### HTML attendu :
- Un `<form>`.
- Un `<input>` lié à l'état `text`.
- Un `<button>` qui est `disabled` si `isSending` est vrai ou si le texte est vide.

---

**C'est le test ultime ! Si tu réussis ça, tu as compris 90% de ce qu'on fait dans Messenger Clone côté Frontend.**
