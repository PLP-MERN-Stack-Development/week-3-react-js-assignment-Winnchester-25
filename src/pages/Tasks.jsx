import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/Button";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => 
    filter === "all" ? true : filter === "completed" ? t.completed : !t.completed
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-4 mb-4">
        {["all", "active", "completed"].map(f => (
          <Button key={f} variant="secondary" onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      <ul>
        {filteredTasks.map(t => (
          <li key={t.id} className="flex justify-between items-center mb-2">
            <span
              onClick={() => toggleTask(t.id)}
              className={`cursor-pointer ${t.completed ? "line-through text-gray-500" : ""}`}
            >
              {t.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(t.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
