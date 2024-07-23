import { ReactNode } from "react";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface ButtonProps {
  onClick?: ButtonClickHandler;
  className?: string;
  type: string;
  children: ReactNode;
}
function Button({ onClick, className, type, children }: ButtonProps) {
  const styles = {
    primary: `w-[100px] text-[17px] h-[50px] sm:w-[200px] bg-primary-blue sm:h-[60px] text-white font-inter font-semibold sm:text-[26px] ${className}`,
    secondary: `w-[100px] text-[17px] h-[50px] sm:w-[200px] bg-white sm:h-[60px] text-gray-text font-inter font-semibold sm:text-[26px] border-4 border-secondary-red ${className}`,
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
