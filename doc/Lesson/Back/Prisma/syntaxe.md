model User { ... } : Définit une table "User" dans la base de données.

@id : Indique que ce champ est la Clé Primaire (l'identifiant unique).

@default(autoincrement()) : Le champ se remplit tout seul en comptant (1, 2, 3...) automatiquement.

@unique : Interdit d'avoir deux fois la même valeur dans cette colonne (ex: deux utilisateurs ne peuvent pas avoir le même email).

@default(now()) : Si on ne donne pas de date, met l'heure actuelle par défaut.

@updatedAt : Met à jour la date automatiquement à chaque modification de la ligne.

String? : Le `?` indique que le champ peut être vide (NULL).

User @relation(...) : Définit un lien (relation) entre deux tables (ex: un Message appartient à un User).
  - `onDelete: Cascade` : Si le parent est supprimé, supprime aussi automatiquement les enfants (ex: supprimer une Conversation supprime tous ses Messages).

@@id([userId, messageId]) : Définit une "Clé Composite" (une combinaison de deux champs pour identifier une ligne de manière unique, souvent utilisé dans les tables de liaison).

Table de liaison (ex: SeenMessage) : Permet de gérer une relation complexe (Plusieurs-à-Plusieurs), par exemple pour savoir quel Message a été vu par quel User.

generator client { provider = "prisma-client-js" } : Configure Prisma pour qu'il génère le code JavaScript nécessaire pour parler à la base de données.
