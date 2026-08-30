'use client';

import React, { useState } from 'react';
import { ChatMessage } from './types';


const MessageComposer = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text) return;

    setIsSending(true);

    await new Promise((res) => setTimeout(res, 1000));

    setIsSending(false);
    setText('');
  }

  return (
    <div>
      <form
        className=''
      >
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='border p-2 w-full'
            placeholder='Ecris un message...'

          />
          <p className='text-xs text-gray-500'>{text.length}</p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSending || !text}
          className='
            rounded-full
            bg-blue-500
            text-white
            p-2
            cursor-pointer
            disabled:opacity-50
            disabled:cursor-not-allowed
          '
        >
          Envoyer
        </button>

      </form>
    </div>
  );
}

export default MessageComposer;

// TODO: Créer le composant MessageComposer
// TODO: Gérer l'état et l'envoi asynchrone
