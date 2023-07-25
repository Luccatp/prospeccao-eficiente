import { FC } from "react";
import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from "@/components/ui/button";

interface ButtonProps extends ShadcnButtonProps {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <ShadcnButton
      className={`border-[1px] shadow-lg shadow-pink-800 border-black px-8 py-3 text-black lg:text-lg ${className}`}
      {...rest}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
