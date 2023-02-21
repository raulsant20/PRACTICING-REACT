import { useState } from "react";
import "./App.css";

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

  const Input = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name;
      const value = name.value;
      createNewTask(value);
      name.value = "";
    };

    return (
      <div>
        To-Do App <br />
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" defaultValue={""} autoFocus />
          </label>
          <input type="submit" value="Agregar" />
        </form>
      </div>
    );
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

  const Item = ({ task, handleDelete }) => {
    const id = task.id;
    return (
      <div className="item">
        <div>
          <input
            type="checkbox"
            name="done"
            checked={task.done}
            onChange={() => {
              handleCheck(id);
            }}
          />
          {task.done ? <del>{task.name}</del> : task.name}
        </div>
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    );
  };

  const ToDoList = () => {
    return (
      <div>
        {tasks.map((task) => (
          <Item key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    );
  };

  const Footer = () => {
    return <div>Footer</div>;
  };

  return (
    <div className="App">
      <Input />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
