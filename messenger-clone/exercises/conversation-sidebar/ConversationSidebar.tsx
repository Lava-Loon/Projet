'use client';

import { useState } from 'react';
import ConversationItem from './ConversationItem';

export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  isUnread: boolean;
}

const ConversationSidebar = () => {
  const [conversations] = useState<Conversation[]>([
    { id: '1', name: 'Rappa', lastMessage: 'Salut ça va ?', isUnread: true },
    { id: '2', name: 'Mbotra', lastMessage: 'Tu as fini le code ?', isUnread: false },
    { id: '3', name: 'Andii', lastMessage: 'On se voit demain', isUnread: true },
  ]);
  
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const activeConversation = conversations.find((c) => c.id === selectedId);
  // TODO: Trouver la conversation sélectionnée pour l'afficher à droite
  // const activeConversation = conversations.find(...)

  return (
    <div className="flex h-[400px] border rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Sidebar Gauche */}
      <div className="w-80 border-r bg-gray-50 flex flex-col">
        <div className="p-4 border-b font-bold text-xl">Messages</div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <ConversationItem 
              key={conv.id}
              conversation={conv}
              onClick={() => setSelectedId(conv.id)}


              // isActive={...}
              // onClick={...}
              
            />
          ))}
        </div>
      </div>
      <h2
        className='
          text-2xl
          font-bold
        '
      >
        {activeConversation ? activeConversation.name : "Selectionner une discussion"}
      </h2>
      {/* Zone de Contenu Droite */}
      <div className="flex-1 flex items-center justify-center bg-white">
        {/* TODO: Afficher le nom de la conversation active ici */}
         <p className="text-gray-400 italic">Sélectionnez une discussion</p>
      </div>
    </div>
  );
};

export default ConversationSidebar;
