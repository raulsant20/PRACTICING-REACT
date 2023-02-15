import useCountDown from "../hooks/useCountDown";

export function CountDown() {
  const time = useCountDown();

  return (
    <div>
      CountDown
      <br />
      {console.log(time)}
      {time}
    </div>
  );
}
