interface ButtonProps {
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  buttonStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  onButtonClick: () => void;
}

function Button({
  text,
  color = "primary",
  onButtonClick,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={() => {
        onButtonClick();
        console.log(text);
      }}
      style={buttonStyle}
    >
      <span style={textStyle}>{text}</span>
    </button>
  );
}

export default Button;
