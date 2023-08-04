"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import getStripe from "@/lib/stripe";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface PDFLoaderProps {}

const PDFLoader: FC<PDFLoaderProps> = ({}) => {
  const { user, isLoaded } = useUser();
  const isInstagram = navigator.userAgent.includes("Instagram");
  const router = useRouter();
  useEffect(() => {
    fetch("/api/is-customer").then(async (res) => {
      res.json().then((data) => {
        router.push(data.url);
      });
    });
  }, []);
  if (!isLoaded) {
    return (
      <div className="flex flex-col h-full flex-1 flex-grow items-center">
        <Loader2 className="w-16 h-16 text-gray-700 animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full flex-1 flex-grow items-center">
      {!isInstagram ? (
        <object
          style={{
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
          }}
          data="/E-book.pdf#toolbar=0"
          type="application/pdf"
          className="w-full max-w-[500px] h-full flex-1 flex-grow overflow-y-scroll"
        />
      ) : (
        <p>Abra o site no eu navegador padrão</p>
      )}
    </div>
  );
};

export default PDFLoader;
