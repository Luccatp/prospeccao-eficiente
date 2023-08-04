import PDFLoader from "@/components/PDFLoader";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <>
      <Link href="/">
        <ArrowLeft className="absolute top-4 left-4 text-gray-700 cursor-pointer" />
      </Link>
      <div className="h-screen gap-10 justify-center flex flex-col">
        <h1 className="hidden text-2xl mt-6 font-bold text-gray-700 text-center md:block md:text-4xl md:mt-2">
          E-Book Prospecção Eficiente
        </h1>
        <PDFLoader />
      </div>
    </>
  );
};

export default Page;
