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
    <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-indigo-600 bg-indigo-100 p-4 rounded">
            Task Manager
        </h1>

      <NewTaskForm addTask={addTask} />

      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleDone={toggleDone} 
      />
    </div>
  );
};

export default TaskManager;
