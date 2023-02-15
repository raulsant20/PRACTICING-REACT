import { useEffect, useState } from "react";

export function CountDown() {
  const useCount = () => {
    const [count, setCount] = useState(Math.floor(Math.random() * 5) + 1);

    useEffect(() => {
      const interval = setTimeout(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearTimeout(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, [count]);

    return count;
  };

  const time = useCount();

  return (
    <div>
      CountDown
      <br />
      {console.log(time)}
      {time}
    </div>
  );
}
