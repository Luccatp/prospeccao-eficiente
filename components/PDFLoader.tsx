"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import getStripe from "@/lib/stripe";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
      <div className="flex-1 h-full w-full flex items-center justify-center">
        <Link
          href={
            "https://drive.google.com/file/d/1u22OT5MoCIjWpaZTKCK9McfRz_ZjR9kq/view?usp=sharing"
          }
        >
          <Button className="text-2xl p-10 md:w-96 md:h-20 md:text-4xl">
            Acesse o E-book
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PDFLoader;
