import React from "react";

const ResolvedList = ({ resolvedTickets = [], deleteResolved }) => {
 
  const handleDelete = (id) => {
    deleteResolved(id);

    
    const updatedResolved = resolvedTickets.filter((ticket) => ticket.id !== id);
    localStorage.setItem("resolvedTickets", JSON.stringify(updatedResolved));
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-[#422AD5]">
        Resolved Tickets
      </h2>

      {resolvedTickets.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No tickets resolved yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {resolvedTickets.map((ticket) => (
            <li
              key={ticket.id}
              className="border p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{ticket.title}</h3>
                <p className="text-sm text-gray-500">{ticket.customer}</p>
              </div>

              <button
                onClick={() => handleDelete(ticket.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResolvedList;