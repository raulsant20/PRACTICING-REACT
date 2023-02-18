import useCountDown from "../hooks/useCountDown";
import { useEffect, useState } from "react";

export function CountDown() {
  const [start, setStart] = useState(0);
  const [time, setTime] = useCountDown(start);

  useEffect(() => {
    if (time <= 0) setTime(start);
    return () => {};
  }, [start]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    setStart(number);
    console.log("start in: ", number);
  };

  return (
    <div>
      CountDown
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          placeholder="Set a number"
          defaultValue="10"
        />
        <br />
        <input type="submit" value="Start" />
      </form>
      <br />
      {time}
    </div>
  );
}
