import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; // empty task not allow
    setTasks([...tasks, task]);
    setTask(""); // input clear 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginRight: "10px"
        }}
      />

      <button onClick={addTask}>Add</button>

      <div style={{ marginTop: "30px" }}>
        {tasks.map((t, i) => (
          <p key={i}>{i + 1}. {t}</p>
        ))}
      </div>
    </div>
  );
}

export default Todo;
