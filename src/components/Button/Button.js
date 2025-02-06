import "./Button.css";

function Button({ src, text, onClick, type, ...props }) {
  return (
    <button className="btn" onClick={onClick} type={type} {...props}>
      <p className="txt-rubik16">{text}</p>
      <div className="btn-icon">
        <img src={src} alt="стрелка" />
      </div>
    </button>
  );
}

export default Button;
