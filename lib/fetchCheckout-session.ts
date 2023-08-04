import { toast } from "react-hot-toast";
export function goToCheckout ()  {
    fetch("/api/checkout-session", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((data) => (window.location.href = data.url as string));
        })
        .catch((err) =>
          toast.error(
            err.message ||
              "Ocorreu um erro ao tentar redirecionar para o pagamento, por favor tente novamente mais tarde."
          )
        );
}