export default function Input({ createNewTask }) {
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
}
