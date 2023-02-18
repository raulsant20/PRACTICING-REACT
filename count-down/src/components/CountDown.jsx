import useCountDown from "../hooks/useCountDown";
import { useEffect } from "react";

export function CountDown({ start }) {
  const [time, setTime] = useCountDown(start);

  useEffect(() => {
    if (time <= 0) setTime(start);
  }, [start]);

  return (
    <div>
      CountDown
      <br />
      {time}
    </div>
  );
}
