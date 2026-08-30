import React from 'react';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    isDone: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;

}
// TODO: Définit tes props
// TODO: Crée le visuel d'une ligne de tâche avec Tailwind

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onToggle
}) => {
  return (
    <div
      className='
        flex
        items-center
        justify-between
        p-3
        border-b
        bg-gray-50
        hover:bg-gray-100
      '
    >
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
      />
      <span>
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
      >
        🗑️
      </button>

    </div>
  );
};

export default TaskItem;
