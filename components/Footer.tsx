import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 py-8 text-center w-full">
      <div className="flex items-center justify-center font-semibold text-white">
        <p className="text-white mr-2">
          Made by{" "}
          <Link
            href="https://www.linkedin.com/in/ryangmurphy/"
            className="text-emerald-800"
          >
            <span className="text-emerald-400/70 font-bold tracking-wider underline  hover:text-emerald-400 hover:underline-offset-2">Murph</span>
          </Link>
        </p>
        <Avatar>
          <AvatarImage src="/murph-ai.png" alt="@ryangmurphy" className="shadow-xl hover:drop-shadow-xl hover:scale-105" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </footer>
  );
}
