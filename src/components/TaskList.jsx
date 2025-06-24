import { useState } from "react";
import TaskCard from "./TaskCard";
const TaskList = ({ tasks, deleteTask, toggleDone }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'pending') return !task.isDone;
    return true;
  });

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {['all', 'done', 'pending'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <div className="grid gap-6">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks here.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              isDone={task.isDone}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => toggleDone(task.id)}
            />
          ))
        )}
      </div>
    </>
  );
};
export default TaskList;
