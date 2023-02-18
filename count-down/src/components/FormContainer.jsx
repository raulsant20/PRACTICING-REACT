import { useState } from "react";
import { CountDown } from "./CountDown";

export function FormContainer() {
  const [start, setStart] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    setStart(number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number" placeholder="Set a number" />
        <br />
        <input type="submit" value="Start" />
      </form>
      <CountDown start={start} />
    </div>
  );
}
