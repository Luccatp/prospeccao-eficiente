import PDFLoader from "@/components/PDFLoader";
import { useUser } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen justify-center flex flex-col">
      <h1>Dashboard</h1>
      <PDFLoader />
    </div>
  );
};

export default Page;
