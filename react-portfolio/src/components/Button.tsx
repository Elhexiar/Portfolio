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
  color,
  onButtonClick,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={color ? `btn btn-${color}` : "custom-button"}
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
