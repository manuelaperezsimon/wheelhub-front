import "./Button.scss";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: string;
  actionOnclick: () => void;
  type: "submit" | "button";
  isDisable?: boolean;
  icon?: JSX.Element;
}

const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
  type,
  isDisable,
  icon,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNameTypeButton}
      type={type}
      onClick={actionOnclick}
      disabled={isDisable}
    >
      {buttonText} {icon}
    </button>
  );
};

export default Button;
