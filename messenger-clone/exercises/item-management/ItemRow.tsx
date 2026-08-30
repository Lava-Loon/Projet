'use client';

interface ItemRowProps {
  item: {
    id: string;
    label: string;
    isLiked: boolean;
  },
  onDelete: (id: string) => void,
  onToggleLike: (id: string) => void

}

const ItemRow: React.FC<ItemRowProps> = ({
  item, onDelete, onToggleLike
}) => {
  return (
    <div
      className="
        flex 
        items-center 
        justify-between 
        p-3 
        border-b
      "
    >
      <span
        className={item.isLiked ? 'text-blue-600 font-bold' : ''}
      >
        {item.label}
      </span>

      <div
        className="
          flex
          gap-2
        "
      >
        <button
          onClick={() => onToggleLike(item.id)}
        >
          {item.isLiked ? '❤️' : '🤍'}
        </button>
        <button
          onClick={() => onDelete(item.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ItemRow;

// TODO: Définir les props (item, onDelete, onToggleLike)
// TODO: Créer le composant avec les boutons d'action
