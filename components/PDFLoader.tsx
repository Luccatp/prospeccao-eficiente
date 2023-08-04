"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface PDFLoaderProps {}

const PDFLoader: FC<PDFLoaderProps> = ({}) => {
  const [PDFFile, setPDFFile] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    // async function callPDF() {
    //   return await fetch(
    //     "https://www.googleapis.com/drive/v3/files/13lQCcNtLz9HUm6aY5zwTj2BIlaFgJcCR"
    //   ).then((res) => {
    //     res.json().then((data) => setPDFFile(data));
    //   });
    // }
    // callPDF();
    // console.log(PDFFile);
  }, []);
  return (
    <div className="flex flex-col h-full flex-1 flex-grow items-center">
      <p>Olá {user ? user.fullName : "fulano"}, seja bem vindo!</p>
      <object
        data="/E-book.pdf#toolbar=0"
        type="application/pdf"
        className="w-full max-w-[500px] h-full flex-1 flex-grow"
      />
    </div>
  );
};

export default PDFLoader;
