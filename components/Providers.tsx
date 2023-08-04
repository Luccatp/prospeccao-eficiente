import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ClerkProvider localization={ptBR}>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ClerkProvider>
  );
};

export default Providers;
