import { useState } from "react";
import { CreateMatrix } from "./components/CreateMatrix";
import { Buttons } from "./components/Buttons";
import { Matrix } from "./components/Matrix";
import "./App.css";

function App() {
  const [size, setSize] = useState({
    n: 0,
    m: 0,
  });
  const [color, setColor] = useState("none");

  const handleMatrix = (e) => {
    e.preventDefault();
    const target = e.target;
    const n = target.n;
    const m = target.m;
    setSize({
      n: n.value,
      m: m.value,
    });
    // console.log(size);
  };

  return (
    <div className="App">
      Color Grid
      <CreateMatrix handleMatrix={handleMatrix} />
      <Matrix size={size} color={color} />
      <Buttons color={color} setColor={setColor} />
    </div>
  );
}

export default App;
