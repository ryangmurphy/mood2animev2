import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-zinc-700 rounded-2xl shadow-xl py-6 md:mb-6 max-w-[40rem] mx-auto flex justify-center">
        <div className="flex justify-start">
          <Button variant="ghost" className="" aria-label="Go to homepage">
            <Link href="/">
              
            </Link>
          </Button>
        </div>
        <div className="flex items-center text-center justify-center mx-auto">
          <Link href="/">
            <h1 className="text-center font-bold text-xl text-white tracking-wide">
              Mood2Anime
            </h1>
          </Link>
        </div>
        <div className="flex justify-end"></div>
      </nav>
    </>
  );
};

export default Navbar;
