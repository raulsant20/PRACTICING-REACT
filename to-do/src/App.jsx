import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
function App() {
  const [tasks, setTasks] = useState([]);

  const createNewTask = (name) => {
    const lastTask = tasks[tasks.length - 1];
    const newId = lastTask ? lastTask.id + 1 : 1;
    const newTask = {
      id: newId,
      name: name,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleCheck = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const Footer = () => {
    return <div>Footer</div>;
  };

  return (
    <div className="App">
      <Input createNewTask={createNewTask} />
      {console.log(tasks)}
      <ToDoList
        tasks={tasks}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer />
    </div>
  );
}

export default App;
