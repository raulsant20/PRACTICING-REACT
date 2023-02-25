import { useState } from "react";
import { FormData } from "./FormData";

export const Input = ({ tasks, handleAdd, show }) => {
  return (
    <div>
      <button onClick={() => handleAdd(show)}>Add</button>
      {show ? <FormData handleAdd={handleAdd} /> : ""}
    </div>
  );
};
