// TODO: Définir l'interface Message ici
// Indice: n'oublie pas le mot-clé 'export'
export interface Message {
  id: string;
  sender: string;
  content: string;
  isRead: boolean;
  timestamp: number;
}