import React, { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    if (title && date) {
      const newEvent = { id: Date.now(), title, date, description };
      setEvents([...events, newEvent]);
      setTitle("");
      setDate("");
      setDescription("");
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div style={{ padding: "22px" }}>
      <h2>Add New Event To List</h2>
      <form onSubmit={addEvent}>
        <input
          type="input text"
          placeholder="Add Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="input date"
          placeholder="Event date/time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit Event</button>
      </form>

      <h2>Newly Added Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
            <p>{event.description}</p>
            <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

