import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex min-h-32 items-center justify-center bg-transparent p-4">
      <header className="flex w-full max-w-7xl items-center justify-between rounded-full bg-primary/90 px-6 md:py-3 py-8 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <div className="flex flex-col items-start leading-none ">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full hover:drop-shadow-xl hover:scale-105 hidden sm:block"
              />
            </div>
          </Link>
        </div>
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-center font-extrabold text-4xl text-white">
            Mood2Anime
          </h1>
        </Link>
      </header>
    </div>
  );
}
