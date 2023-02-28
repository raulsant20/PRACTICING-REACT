import "./style.css";

export const Buttons = ({ color, setColor }) => {
  return (
    <div className="buttons">
      Select a color and click on any cell of the grid:
      <br />
      <button
        id="black"
        onClick={(e) => {
          e.preventDefault();
          e.target.focus();
          setColor("black");
        }}
      ></button>
      <button
        id="green"
        onClick={() => {
          setColor("green");
        }}
      ></button>
      <button
        id="blue"
        onClick={() => {
          setColor("blue");
        }}
      ></button>
    </div>
  );
};
