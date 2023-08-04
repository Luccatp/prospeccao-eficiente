"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import getStripe from "@/lib/stripe";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface PDFLoaderProps {}

const PDFLoader: FC<PDFLoaderProps> = ({}) => {
  const { user, isLoaded } = useUser();
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
      <div
        className="w-full max-w-[600px] h-full flex-1 flex-grow"
        style={{ overflow: "auto", WebkitOverflowScrolling: "touch" }}
      >
        <embed
          src="/E-book.pdf#toolbar=0&scrollbar=1"
          type="application/pdf"
          style={{
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default PDFLoader;
