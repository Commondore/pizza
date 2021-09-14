import "./BackDrop.css";

const BackDrop = ({ show, children, clicked }) =>
  show ? (
    <div className="back-drop" onClick={clicked}>
      {children}
    </div>
  ) : null;

export default BackDrop;
