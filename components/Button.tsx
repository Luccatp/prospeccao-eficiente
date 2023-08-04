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

interface ButtonProps extends ShadcnButtonProps {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn } = useUser();
  return (
    <ShadcnButton
      onClick={async () => {
        setIsLoading(true);
        const checkoutUrl = await fetch("/api/checkout-session", {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            res.json().then((data) => {
              if (data && typeof data.url === "string") {
                window.location.href = data.url as string;
              } else {
                if (!isSignedIn) {
                  toast.error("Faça login para comprar o e-book!");
                }
              }
              data.url as string;
            });
          })
          .catch((err) =>
            toast.error(
              err.message ||
                "Ocorreu um erro ao tentar redirecionar para o pagamento, por favor tente novamente mais tarde."
            )
          )
          .finally(() => setIsLoading(false));
      }}
      className={`border-[1px] shadow-lg shadow-pink-800 border-black px-8 py-3 text-black lg:text-lg ${className}`}
      {...rest}
    >
      {isLoading && <Loader2 className="animate-spin ml-2" />}
      {children}
    </ShadcnButton>
  );
};

export default Button;
