

// TODO: Définir l'interface ChatMessage
export interface ChatMessage {
  id: string;
  text: string;
  status: 'sending' | 'sent' | 'error';
}