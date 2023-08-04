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
        <h1 className="text-4xl mt-2 font-bold text-gray-700 text-center">
          E-Book Prospecção Eficiente
        </h1>
        <PDFLoader />
      </div>
    </>
  );
};

export default Page;
