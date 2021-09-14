import BackDrop from "../BackDrop/BackDrop";
import "./Modal.css";

function Modal({ children, show, closed }) {
  return (
    <>
      <BackDrop show={show} clicked={closed} />
      <div className={`modal ${show ? " show" : ""}`}>{children}</div>
    </>
  );
}

export default Modal;
