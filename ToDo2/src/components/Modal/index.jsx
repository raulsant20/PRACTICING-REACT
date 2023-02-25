import "./style.css";
export const Modal = ({ children }) => {
  console.log(children);
  return (
    <div className="background">
      <div className="container">{children}</div>
    </div>
  );
};
