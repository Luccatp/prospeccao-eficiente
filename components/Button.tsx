"use client";
import { useState } from "react";
import { FC } from "react";
import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

interface ButtonProps extends ShadcnButtonProps {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn } = useUser();
  return (
    <>
      <Link href={"https://pay.hotmart.com/Q85514316X"} prefetch>
        <ShadcnButton
          className={`border-[1px] shadow-lg shadow-pink-800 border-black px-8 py-3 text-black lg:text-lg ${className}`}
          {...rest}
        >
          {isLoading && <Loader2 className="animate-spin ml-2" />}
          {children}
        </ShadcnButton>
      </Link>
    </>
  );
};

export default Button;
