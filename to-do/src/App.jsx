import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = "";
  const [tasks, setTasks] = useState([
    /*
    {
      id: 1,
      name: "Task 1",
      done: false,
    },
    {
      id: 2,
      name: "Task 2",
      done: false,
    },
    {
      id: 3,
      name: "Task 3",
      done: false,
    },*/
  ]);

  const createNewTask = (name) => {
    const lastTask = tasks[tasks.length - 1];
    const newId = lastTask ? lastTask.id + 1 : 1;
    const newTask = {
      id: newId,
      name: name,
      done: false,
    };
    // console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const Input = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name;
      createNewTask(name.value);
      name.value = "";
    };

    return (
      <div>
        To-Do App <br />
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" defaultValue={""} />
          </label>
          <input type="submit" value="Agregar" />
        </form>
      </div>
    );
  };

  const handleDelete = (id) => {
    console.log(id);
    console.log("deleting", tasks);

    // const updatedTasks = [...tasks];
    // updatedTasks.filter((task) => task.id !== id);
    // console.log(updatedTasks);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheck = (id) => {
    console.log("checking", id);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        console.log(task, id);
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(updatedTasks);

    console.log(updatedTasks);
  };

  const Item = ({ task, handleDelete }) => {
    // console.log(task);
    const id = task.id;
    // console.log(id);
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
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  };

  const ToDoList = ({ tasks }) => {
    return (
      <div>
        Lista de items
        {/* {console.log(tasks)} */}
        {tasks.map((task) => (
          <Item key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    );
  };

  const ToDoItems = () => {
    return (
      <div>
        {/* {console.log(tasks)} */}
        {/* {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))} */}
        <ToDoList tasks={tasks} />
      </div>
    );
  };

  const Footer = () => {
    return <div>Footer</div>;
  };

  return (
    <div className="App">
      <Input />
      <ToDoItems />
      <Footer />
    </div>
  );
}

export default App;
