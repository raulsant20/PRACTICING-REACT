export const Cell = ({ color }) => {
  const handleCel = (e, color) => {
    e.preventDefault();
    const target = e.target;
    const check = target.className.split(" ");
    if (check[1] == "" || check[1] != color) {
      check[1] = color;
      target.className = check.join(" ");
    }
  };

  return <td className="cel" onClick={(e) => handleCel(e, color)}></td>;
};
