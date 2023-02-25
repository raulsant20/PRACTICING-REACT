import "./FormData.css";
import { Modal } from "./Modal";

export const FormData = ({ handleAdd }) => {
  return (
    <Modal>
      <div className="header">
        Estado: To-do/In Progress/Done <button onClick={handleAdd}>x</button>
      </div>
      <form>
        <label>
          Título:
          <input type="text" />
        </label>
        <label>
          Descripción: <br />
          <textarea name="" id="" cols="50" rows="5"></textarea>
        </label>
        <label>
          Inicio:
          <input type="date" name="" id="" />
        </label>
      </form>
      <div className="buttons">
        <button onClick={handleAdd}>Cancelar</button>
        <button>Crear</button>
      </div>
    </Modal>
  );
};
