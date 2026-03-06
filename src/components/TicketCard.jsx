import React from "react";

const TicketCard = ({ ticket, addToTask }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const priorityColor = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  const statusStyle =
    status === "Open"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${statusStyle}`}
        >
          ● {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <span>#{id}</span>

          <span className={`font-semibold ${priorityColor[priority]}`}>
            {priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>{customer}</span>
          <span>{createdAt}</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={addToTask}
        className="mt-4 bg-[#422AD5] text-white px-3 py-1 rounded hover:opacity-90"
      >
        Add to Task
      </button>
    </div>
  );
};

export default TicketCard;