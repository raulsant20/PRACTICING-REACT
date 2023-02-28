import "./style.css";

export const CreateMatrix = ({ handleMatrix }) => {
  return (
    <div>
      <form onSubmit={handleMatrix}>
        <label>
          filas:
          <input id="n" name="n" type="number" />
        </label>
        <label>
          columnas:
          <input id="m" name="m" type="number" />
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};
