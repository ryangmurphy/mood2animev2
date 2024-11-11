import React from "react";
import Navbar from "@/components/Navbar";
import MoodSelector from "@/components/MoodSelector";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-50">
        <Header />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 1000"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="container relative flex flex-col items-center gap-8 md:flex-row md:items-center">
          <div className="z-20 w-full md:w-1/2 px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="max-w-md bg-white rounded-2xl border-r-4 border-primary/40 shadow-md shadow-gray-300 leading-loose p-4 md:p-12">
                <h1 className="my-4 text-primary text-3xl font-bold capitalize sm:text-3xl md:text-5xl lg:text-5xl md:leading-loose">
                  Explore the top-rated{" "}
                  <span className="bg-primary text-white rounded-xl py-1 px-3 md:leading-snug">
                    Anime
                  </span>{" "}
                  tailored to your mood
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-8 pb-8 pt-8 md:py-32">
              <MoodSelector />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
