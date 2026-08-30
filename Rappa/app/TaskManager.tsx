import React, { useState } from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Réussir le Projet Rappa 🕯️', isDone: false },
    { id: '2', title: 'Apprendre React et Next 🚀', isDone: true }
  ]);

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id && task.isDone === false));
  };

  const handleToggle = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  return (
    <div
      className="
        flex
        justify-between
        items-center 
        p-6 
        bg-white 
        shadow-xl 
        rounded-2xl
      "
    >
      <h1
        className="
          text-2xl 
          font-bold 
          mb-6 
          text-gray-800
        "
      >
        Tâches
      </h1>

      <div
        className="
          space-y-2
          text-4xl
          font-bold
        "
      >
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {tasks.length === 0 && (
        <p
          className="
            text-center 
            text-gray-400 
            mt-4 
            italic
          "
        >
          Aucune tache
        </p>
      )}
    </div>
  );
};

export default TaskManager;
