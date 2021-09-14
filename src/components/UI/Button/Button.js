import "./Button.css";

const Button = ({ type, clicked, children }) => {
  return (
    <button
      onClick={clicked}
      className={type ? ["btn", type].join(" ") : "btn"}
    >
      {children}
    </button>
  );
};

export default Button;
