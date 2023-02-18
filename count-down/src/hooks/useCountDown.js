import { useState, useEffect } from "react";

const useCountDown = (start) => {
  const [count, setCount] = useState(start);

  console.log("using useCount");

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

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return [count, setCount];
};

export default useCountDown;
