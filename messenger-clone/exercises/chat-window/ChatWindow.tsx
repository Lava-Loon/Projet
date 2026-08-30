'use client';

import MessageBubble, { Message } from "./MessageBubble";
// TODO: Importer MessageBubble et Message
// import MessageBubble, { Message } from "./MessageBubble";

const ChatWindow = () => {
  // TODO: Recréer la liste de messages
  const messages: Message[] = [
    {
      id: '1',
      text: 'Rappa',
      senderId: 'me',
      createdAt: new Date()
    },
    {
      id: '2',
      text: 'Mbotra',
      senderId: 'other',
      createdAt: new Date()
    }, {
      id: '3',
      text: 'Rappa',
      senderId: 'me',
      createdAt: new Date()
    }, {
      id: '4',
      text: 'Mbotra',
      senderId: 'other',
      createdAt: new Date()
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-4">
      {/* TODO: Utiliser .map((msg) => ...) pour passer les props */}
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          isOwn={msg.senderId === 'me'}

        />
      ))}
    </div>
  );
}

export default ChatWindow;
