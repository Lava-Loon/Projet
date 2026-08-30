# Relations avancées Prisma (Messenger Clone)

Ce document explique les relations complexes définies dans `schema.prisma` pour le clone de Messenger.

## 1. Relations Many-to-Many implicites et explicites

Dans ce projet, les relations sont gérées de manière explicite pour avoir plus de contrôle.

### Exemple: Vu par (SeenMessage)

Pour suivre quels utilisateurs ont vu quels messages, on utilise une table de jointure explicite `SeenMessage` plutôt qu'une relation many-to-many implicite, car on pourrait vouloir ajouter d'autres champs (comme `seenAt`).

```prisma
model Message {
  id Int @id @default(autoincrement())
  // ...
  seenBy SeenMessage[] // Relation vers la table de jointure
}

model User {
  id Int @id @default(autoincrement())
  // ...
  seenMessages SeenMessage[]
}

model SeenMessage {
  userId Int
  messageId Int

  user User @relation(fields: [userId], references: [id])
  message Message @relation(fields: [messageId], references: [id])

  // Clé primaire composée (Composite ID)
  // Un utilisateur ne peut voir un message qu'une seule fois
  @@id([userId, messageId])
}
```

**Syntaxe Clé:**
- `@@id([champ1, champ2])`: Définit une clé primaire composée de plusieurs colonnes.

## 2. Relations One-to-Many

Un utilisateur a plusieurs conversations, une conversation a plusieurs messages.

```prisma
model User {
  // ...
  conversations Conversation[]
  messages Message[]
}

model Conversation {
  // ...
  userId Int // Créateur ou participant principal
  user User @relation(fields: [userId], references: [id])
  
  messages Message[]
}

model Message {
  // ...
  conversationId Int
  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  
  senderId Int 
  sender User @relation( fields: [senderId], references: [id])
}
```

**Syntaxe Clé:**
- `onDelete: Cascade`: Si une conversation est supprimée, tous ses messages le sont aussi automatiquement.

## 3. Contraintes Uniques Composées

Dans le modèle `Account` (NextAuth), on veut s'assurer qu'un compte tiers est unique par fournisseur.

```prisma
model Account {
  // ...
  provider String
  providerAccountId String

  // Empêche d'avoir deux fois le même ID Google/Github
  @@unique([provider, providerAccountId])
}
```

**Syntaxe Clé:**
- `@@unique([champ1, champ2])`: Combinaison unique de colonnes.
