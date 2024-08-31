import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-zinc-700 rounded-2xl shadow-xl py-2 md:mb-4 max-w-[40rem] mx-auto flex justify-between items-center">
      {/* Logo Container */}
      <div className="flex-shrink-0 mr-auto ml-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full hover:drop-shadow-xl hover:scale-105"
          />
        </Link>
      </div>

      {/* Centered Title */}
      <div className="flex-1 text-center">
        <Link href="/">
          <h1 className="font-extrabold text-3xl text-white tracking-wide">
            Mood2Anime
          </h1>
        </Link>
      </div>

      {/* Empty Div for spacing (if needed) */}
      <div className="flex-shrink-0 ml-auto"></div>
    </nav>
  );
};

export default Navbar;
