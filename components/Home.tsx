import React from "react";
import Navbar from "@/components/Navbar";
import MoodSelector from "@/components/MoodSelector";
import Header from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-50">
        <Header />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 1000"
          className="min-h-screen min-w-full"
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
      <div className="relative pt-28 pb-24">
        <div className="absolute left-0 z-10 hidden h-full"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-md bg-white rounded-2xl border-r-8 border-r-primary/40 shadow-md shadow-gray-300 leading-loose">
                <h1 className="my-6 ml-3 text-pretty text-primary capitalize text-2xl leading-loose font-bold lg:text-7xl">
                  Explore the top-rated{" "}
                  <span className="bg-primary rounded-2xl text-white text-center flex justify-center w-64 mx-auto">Anime</span> tailored
                  to your mood
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
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