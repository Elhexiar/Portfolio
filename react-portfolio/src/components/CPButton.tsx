interface CPButtonProps {
  children?: React.ReactNode[];
  direction?: "left" | "right";
  onClick?: () => void;
}

function CPButton({ children, direction, onClick }: CPButtonProps) {
  return (
    <button className={"custom-button " + direction} onClick={onClick}>
      {children}
    </button>
  );
}

export default CPButton;
