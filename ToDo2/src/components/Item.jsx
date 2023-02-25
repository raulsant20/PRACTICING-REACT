import { useState } from "react";
import { Modal } from "./Modal";

export const Item = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      Item
      <button onClick={() => setShow(true)}>Settings</button>
      <button>Delete</button>
      {show && (
        <Modal>
          Item modal <button onClick={() => setShow(false)}>X</button>
        </Modal>
      )}
    </div>
  );
};
