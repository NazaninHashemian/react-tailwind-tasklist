const TaskCard = ({ title, description, isDone, onDelete, onToggle }) => {
  return (
    <div className={`bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition ${isDone ? 'opacity-70' : ''}`}>
  
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${isDone ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
          {isDone ? 'Done' : 'Pending'}
        </span>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onToggle}
          className={`text-sm px-4 py-2 rounded transition cursor-pointer ${
            isDone ? 'bg-gray-300 text-gray-800 hover:bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isDone ? 'Undo' : 'Mark as Done'}
        </button>

        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
