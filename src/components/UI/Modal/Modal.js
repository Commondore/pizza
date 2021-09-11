import './Modal.css';

function Modal({children, show}) {
  return (
    <div className={`modal ${show ? ' show' : ''}`}>
      {children}
    </div>
  )
}

export default Modal
