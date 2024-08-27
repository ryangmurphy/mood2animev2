import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-600 rounded-2xl shadow-xl  py-6 md:mb-6 max-w-[40rem] mx-auto flex">
        <div className="flex justify-start">
          <button
            className="btn btn-square btn-ghost"
            aria-label="Go to homepage"
          >
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10m-5 4h.01"
                />
              </svg>
            </Link>
          </button>
        </div>
        <div className="flex items-center text-center justify-center mx-auto">
          <div className="text-center font-bold text-xl text-white tracking-wide">
            Mood2Anime
          </div>
        </div>
        <div className="flex justify-end">
        </div>
      </nav>
    </>
  );
};

export default Navbar;
