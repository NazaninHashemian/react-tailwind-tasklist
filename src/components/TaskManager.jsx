import { useState } from "react";
import TaskList from "./TaskList";

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
    <TaskList tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
  );
};

export default TaskManager;
