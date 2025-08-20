import { useState } from "react";

function AddEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title,
      date,
      description,
    };

    console.log("New Event Added:", newEvent);

    // reset form after submit
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Event Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter event title"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Event Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Event Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter event details"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Event
      </button>
    </form>
  );
}

export default AddEventForm;
