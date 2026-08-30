# Mission : Navigation Mobile (SM) 📱

C'est une excellente clarification ! Sur mobile (`sm`), on n'a pas assez de place pour afficher la liste ET la conversation en même temps. On doit donc faire un choix : soit l'un, soit l'autre.

## Comment ça marche sur Messenger (et ton projet) ?

Actuellement, dans tes fichiers, voici la situation :

### 1. La Liste (`UserList.tsx`)
Elle a la classe `w-full` (prend toute la largeur) et `block`. Elle est donc visible par défaut sur mobile.

### 2. Le Contenu (`page.tsx`)
Il contient ton `EmptyState` (le message "Sélectionner un ami"). 

## Le défi de la "Bascule"

Pour que ça bascule quand on clique, on utilise généralement une astuce avec les dossiers de Next.js.

### Le comportement voulu :
1. **Écran Liste** : URL : `/users` -> On voit `UserList`.
2. **Écran Chat** : URL : `/conversations/[id]` -> On **cache** `UserList` sur mobile et on montre la conversation.

## Comment faire ça proprement ?

### Étape 1 : Le Hook `useConversation`
Dans ton projet, tu as probablement un hook (dans `app/hooks`) qui te dit si une conversation est "ouverte" (si l'ID est dans l'URL).

### Étape 2 : Cacher la liste logiciellement
Dans `UserList.tsx`, on peut ajouter une classe conditionnelle :
```tsx
const { isOpen } = useConversation(); // On regarde si un chat est ouvert

return (
  <aside className={clsx(`
    fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200
  `, 
    isOpen ? 'hidden' : 'block w-full left-0' // SI ouvert -> cache-toi sur mobile !
  )}>
    {/* ... reste du code ... */}
  </aside>
)
```

---

## Ton Plan d'Action pas à pas :

1. **Vérifier tes hooks** : Est-ce que tu as un fichier `app/hooks/useConversation.ts` ?
2. **Modifier `UserList.tsx`** : Utiliser ce hook pour dire à la liste : "Si une conversation est ouverte, cache-toi sur mobile pour laisser la place au chat".

**Veux-tu que je regarde si tu as déjà ce hook dans ton projet ?** C'est lui qui va donner le "top départ" à la bascule !
