import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  const handleAddToTaskStatus = (ticket) => {
    const exists = taskStatus.find((t) => t.id === ticket.id);

    if (!exists) {
      setTaskStatus((prev) => [...prev, ticket]);
      toast.info(`${ticket.title} added to In Progress`);
    } else {
      toast.warning("Task already in progress");
    }
  };

  const handleCompleteTask = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));

    toast.success(`${ticket.title} marked as Resolved`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Banner
        inProgressCount={taskStatus.length}
        resolvedCount={resolvedTickets.length}
      />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-4">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              addToTask={() => handleAddToTaskStatus(ticket)}
            />
          ))}
        </div>

       
        <div className="w-full md:w-1/3 border p-4 rounded shadow">
          <TaskStatus
            tasks={taskStatus}
            completeTask={handleCompleteTask}
          />
        </div>

      </div>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;