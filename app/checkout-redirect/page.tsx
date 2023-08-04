"use client";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  useEffect(() => {
    toast.success(
      "Você será redirecionado para o a pagina de pagamento em breve."
    );
    fetch("/api/checkout-session", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => (window.location.href = data.url as string));
      })
      .catch((err) => {
        toast.error(
          err.message ||
            "Ocorreu um erro ao tentar redirecionar para o pagamento, por favor tente novamente mais tarde."
        );
        throw new Error(err.message);
      });
  }, []);
  return <Loader2 className="animate-spin" />;
};

export default Page;
