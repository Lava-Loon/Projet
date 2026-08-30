'use client';

import { useState } from 'react';
import ItemRow from './ItemRow';

const ItemManager = () => {
  const [items, setItems] = useState([
    { id: '1', label: 'Rappa be', isLiked: false },
    { id: '2', label: 'Mbotra kely', isLiked: true }
  ]);

  const handleDelete = (id: string) => {
    const newItems = items.filter((oneItem) => oneItem.id !== id);
    setItems(newItems);
  };

  const handleToggleLike = (id: string) => {
    const newItems = items.map((oneItem) => {
      if (oneItem.id === id) {
        return { ...oneItem, isLiked: !oneItem.isLiked }
      };
      return oneItem;
    });
    setItems(newItems);
  };

  return (
    <div>
      {items.map((oneItem) => (
        <ItemRow
          key={oneItem.id}
          item={oneItem}
          onDelete={() => { handleDelete(oneItem.id) }}
          onToggleLike={() => { handleToggleLike(oneItem.id) }}
        />
      ))}
      );
}

      export default ItemManager;
