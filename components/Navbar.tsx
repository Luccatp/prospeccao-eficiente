import { FC } from "react";
import { SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="grid grid-cols-3 fixed w-full bg-blend-saturation backdrop-filter backdrop-blur-sm justify-center items-center h-14 px-6 border-b border-gray-200 z-50">
      <div className="col-span-3 justify-self-center">
        <UserButton showName afterSignOutUrl="/" />
      </div>
      <SignedOut>
        <User className="justify-self-start col-start-1" />
        <div className="justify-self-end col-start-3 flex gap-4">
          <Link href="/sign-in">
            <Button
              className="rounded-2xl border-2 border-pink-400 text-sm"
              variant={"outline"}
            >
              Login
            </Button>
          </Link>

          <Link href={"/sign-up"}>
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
