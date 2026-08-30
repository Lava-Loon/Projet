'use client';

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
      className="
         
      "
    >
      {/* Une ligne de tâche avec titre, checkbox et bouton supprimer */}
    </div>
  );
};

export default TaskItem;
