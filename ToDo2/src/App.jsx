import { useState } from "react";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task 1",
      formData: [],
    },
    {
      id: 2,
      title: "task 2",
      formData: [],
    },
  ]);

  const [show, setShow] = useState(false);

  const handleAdd = (show) => {
    console.log("Adding...");
    setShow(!show);
  };

  return (
    <div className="App">
      <Input tasks={tasks} handleAdd={handleAdd} show={show} />

      <TodoList />
    </div>
  );
}

export default App;
