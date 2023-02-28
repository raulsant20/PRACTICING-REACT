import "./style.css";
import { Cell } from "../Cell";

export const Matrix = ({ size, color }) => {
  const { n, m } = size;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < m; j++) {
      const obj = {};
      obj.row = i;
      obj.column = j;
      obj.key = (n - 1) * i + j + 1;
      row.push(obj);
    }
    matrix.push(row);
  }

  return (
    <div className="table__container">
      <table>
        <tbody>
          {matrix.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((item) => {
                  return <Cell key={item.key} color={color} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
