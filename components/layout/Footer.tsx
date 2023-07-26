"use client";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-col items-center gap-10 mb-20 border-t-2 border-gray-400 w-full pt-10">
      <span className="text-gray-600">Entre em contato comigo!</span>
      <div className="grid grid-flow-col gap-10">
        <Link href={"https://www.instagram.com/luisaoliveirx/"} target="_blank">
          <Instagram className="text-pink-600 hover:text-pink-900" size={30} />
        </Link>
        <Mail
          className="text-pink-600 hover:text-pink-900  cursor-pointer"
          size={30}
          onClick={() => {
            window.open("mailto:contatoluisaoliverx@gmail.com");
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
