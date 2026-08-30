# Prisma Schema & Queries

## Schéma (schema.prisma)
Définit la structure de la base de données.

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]  // Relation 1-n
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## Commandes CLI
- `npx prisma init`: Initialise Prisma
- `npx prisma db push`: Pousse le schéma vers la base de données (dev)
- `npx prisma migrate dev`: Crée une migration SQL et met à jour la BDD
- `npx prisma studio`: Ouvre une interface graphique pour voir les données
- `npx prisma generate`: Génère le client Prisma (après modif du schéma)

## Requêtes (Client)
Utilisation dans le code (Node.js / Next.js).

### Lire (Read)
```javascript
// Tous les utilisateurs
const users = await prisma.user.findMany();

// Un utilisateur par ID
const user = await prisma.user.findUnique({
  where: { id: 1 },
});

// Filtrer
const posts = await prisma.post.findMany({
  where: { published: true },
});
```

### Créer (Create)
```javascript
const newUser = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});
```

### Mettre à jour (Update)
```javascript
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Alice Wonderland' },
});
```

### Supprimer (Delete)
```javascript
const deletedUser = await prisma.user.delete({
  where: { id: 1 },
});
```

## Requêtes Avancées

### Filtrage (Where)
```javascript
where: {
  age: { gte: 18 },          // Plus grand ou égal à 18
  email: { contains: '@gmail.com' }, // Contient...
  name: { startsWith: 'A' }, // Commence par...
  OR: [                      // L'un OU l'autre
    { name: 'Alice' },
    { name: 'Bob' }
  ]
}
```

### Pagination et Tri
```javascript
const posts = await prisma.post.findMany({
  take: 10,       // Prendre 10 éléments
  skip: 20,       // Sauter les 20 premiers (page 3)
  orderBy: {
    createdAt: 'desc', // Tri décroissant (plus récent en premier)
  },
});
```

### Relations (Connect)
Lier un enregistrement existant lors de la création.
```javascript
const post = await prisma.post.create({
  data: {
    title: 'Mon article',
    author: {
      connect: { email: 'alice@example.com' } // Lie à l'utilisateur existant
    }
  }
});
```
