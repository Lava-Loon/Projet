// app/libs/prismadb.ts
import { PrismaClient } from "@prisma/client"; // permet de se connecter à la base de donnée et faire des requêtes

declare global {
  var prisma: PrismaClient | undefined;
}

const client =
  globalThis.prisma ??
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
