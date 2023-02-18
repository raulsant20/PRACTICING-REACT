import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CountDown } from "./components/CountDown";
import { FormContainer } from "./components/FormContainer";

function App() {
  return (
    <div className="App">
      {/* <FormContainer /> */}
      <CountDown />
    </div>
  );
}

export default App;
