import styles from "./Button.module.css";

type Size = "small" | "medium" | "big";

interface ButtonProps {
  size: Size;
  outline?: boolean;
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ size, outline, text, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${styles[size]} ${outline ? styles.outline : ""}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
