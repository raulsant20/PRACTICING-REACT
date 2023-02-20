import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = "";
  const [tasks, setTasks] = useState([]);

  const creatingTask = (value) => {
    const handleDelete = (e) => {
      console.log("handleDelete");
      console.log(e);
    };

    return (
      <div className="item">
        <input type="checkbox" name="" id="" />
        <p>{value}</p>
        <button type="button" onClick={handleDelete}>
          Setting
        </button>
        <button type="button">Delete</button>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.task;
    let value = name.value;
    const task = creatingTask(value);
    console.log(task);
    setTasks([...tasks, task]);
    name.value = "";
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="task" defaultValue={""} />
          </label>
          <input type="submit" value="Agregar" />
        </form>
        {tasks.map((task) => task)}
        <div className="footer">
          <p>Total: {tasks.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
