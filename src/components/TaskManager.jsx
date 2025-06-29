// TaskManager.jsx
import { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn Tailwind CSS",
      description: "Style this React app with Tailwind",
      isDone: false,
    },
    {
      id: 2,
      title: "Create a Portfolio Project",
      description: "Use Tailwind for styling and deploy it",
      isDone: true,
    },
  ]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      isDone: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-white to-purple-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg ring-1 ring-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">
           My Task Manager
        </h1>
        <NewTaskForm addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          toggleDone={toggleDone} 
        />
      </div>
    </div>
  );
};

export default TaskManager;
