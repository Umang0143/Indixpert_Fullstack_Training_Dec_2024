import { useState } from "react";

const ToDoDynemic = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle Complete
  const toggleTask = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  // Remove Task
  const removeTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="container mt-4">

      <h3 className="mb-3">Todo List</h3>

      {/* Input + Button */}
      <div className="input-group mb-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter list item name"
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Todo Item
        </button>
      </div>

      {/* Todo Items */}
      <ul className="list-group">
        {todos.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            {/* Left side: checkbox + text */}
            <div className="d-flex align-items-center gap-3">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(index)}
              />

              <span
                className={item.completed ? "text-decoration-line-through" : ""}
              >
                {item.text}
              </span>
            </div>

            {/* Remove button */}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoDynemic;
