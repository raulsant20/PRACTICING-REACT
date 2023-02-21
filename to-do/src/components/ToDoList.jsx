import Item from "./Item";

export default function ToDoList({ tasks, handleDelete, handleCheck }) {
  return (
    <div>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}
