import React from "react";

const TaskStatus = ({ tasks, completeTask }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Task Status</h2>
      {tasks.length === 0 ? (
        <p>No tasks in progress.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="border p-2 mb-2 rounded flex justify-between items-center"
          >
            <span>{task.title}</span>
            <button
              onClick={() => completeTask(task)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
