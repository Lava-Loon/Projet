'use client';

import { useState } from 'react';
import TaskItem from './TaskItem';


// TODO: Définit ton interface Task
// TODO: Crée ton composant TaskManager avec son style Tailwind
// TODO: Gère tes états (liste, texte de l'input)

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (id:string) => {
    const newTask = tasks.filter((oneTask) => oneTask.id !== id);
    setTasks(newTask);
  };

  const handleToggle = (id:string) => {

  };

  return (
    <div
      className="
        max-w-md
        mx-auto
        mt-10
        p-6
        bg-white
        shadow-xl
        rounded-2xl
      "
    >
      <h1
        className='
          text-2xl
          font-bold
          text-gray-800
        '
      >
        Taches
      </h1>
      {tasks.map((oneTask) => (
        <TaskItem
          key={oneTask.id}
          task={oneTask}
          onToggle={() => {handleToggle(oneTask.id)}}
          onDelete={() => {handleDelete(oneTask.id)}}

        />
      ))}
      {/* C'est ici que tu construis ton visuel ! */}
    </div>
  );
};

export default TaskManager;
