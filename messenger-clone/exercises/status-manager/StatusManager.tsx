'use client';

import { useCallback, useState } from 'react';
import clsx from 'clsx';

type UserStatus = 'online' | 'offline';

const StatusManager = () => {
  const [status, setStatus] = useState<UserStatus>('online');

  const toggleStatus = useCallback(() => {
    setStatus(status === 'online' ? 'offline' : 'online')
  }, [status]);
  return (
    <div
      className='
        rounded-lg
        w-[250px]
        h-[125px]
        bg-white
        flex
        flex-col
        items-center
        justify-center
        gap-4
      '
    >
      <p
        className='
          text-sm 
          font-semibold
        '

      >
        {status}
      </p>
      <button onClick={toggleStatus}>
        Changer de statut
      </button>

    </div>

  );
}

export default StatusManager;


// TODO: Définir le type UserStatus
// TODO: Créer le composant StatusManager
// TODO: Utiliser useState<UserStatus>
