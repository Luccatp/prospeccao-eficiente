import { FC, use, useEffect } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import AsyncButton from "./Button";
import { Button } from "./ui/button";
import { ArrowBigRightDash, User } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="grid grid-cols-3 fixed w-full bg-blend-saturation backdrop-filter backdrop-blur-sm justify-center items-center h-14 px-6 border-b border-gray-200 z-50">
      <div className="col-start-1 row-span-2 justify-self-start md:justify-self-center md:col-start-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="justify-self-end col-start-3">
        <SignedIn>
          <Link href="/dashboard">
            <AsyncButton
              className="text-sm shadow-none"
              size={"sm"}
              variant={"outline"}
            >
              Dashboard <ArrowBigRightDash />
            </AsyncButton>
          </Link>
        </SignedIn>
      </div>
      <SignedOut>
        <User className="justify-self-start col-start-1 row-span-2" />
        <div className="justify-self-end row-span-2 col-start-3 flex gap-4">
          <Link href="/sign-in" target="_blank">
            <Button
              className="rounded-2xl border-2 border-pink-400 text-sm"
              variant={"outline"}
            >
              Login
            </Button>
          </Link>

          <Link href={"/sign-up"} target="_blank">
            <Button className="text-pink-600 text-sm" variant={"ghost"}>
              Cadastrar
            </Button>
          </Link>
        </div>
      </SignedOut>
    </nav>
  );
};

export default Navbar;
