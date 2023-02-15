import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CountDown } from "./components/CountDown";

function App() {
  const [start, setStart] = useState(30);

  return (
    <div className="App">
      <input
        id="start"
        type="number"
        placeholder="Set a number"
        value={start}
        onChange={(e) => {
          console.log(e.target.value);
          return setStart(e.target.value);
        }}
      />
      <CountDown />
    </div>
  );
}

export default App;
