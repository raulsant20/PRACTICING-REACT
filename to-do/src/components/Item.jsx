export default function Item({ task, handleDelete, handleCheck }) {
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
}
