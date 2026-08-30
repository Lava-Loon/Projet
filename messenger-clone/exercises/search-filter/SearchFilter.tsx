'use client';

import { useState } from 'react';

const contacts = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
  { id: '4', name: 'David' },
  { id: '5', name: 'Eve' },
];



const SearchFilter = () => {
  const [search, setSearch] = useState('');

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <input
        type="text"
        placeholder='Recherche...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='
          rounded-lg
          border
          p-2
          w-full
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2  
        '
      />

      <ul>
        {filterContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



// TODO: Créer une liste de contacts
// TODO: Gérer l'état de la recherche
// TODO: Filtrer et afficher
