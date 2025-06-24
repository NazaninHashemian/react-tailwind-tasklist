import { useState } from "react";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

const App = () => {
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
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="max-w-3xl mx-auto p-4">
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      </main>
    </div>
  );
};

export default App;
