import React from "react";
import Navbar from "@/components/Navbar";
import MoodSelector from "@/components/MoodSelector";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center bg-zinc-900 w-full min-h-screen p-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white capitalize text-center">
        Explore the top-rated Anime tailored to your mood
      </h1>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white capitalize pt-4 sm:pt-6 text-center">
        Pick how you are feeling!
      </h3>
      <div className="w-full sm:w-3/4 md:w-1/2">
        <MoodSelector />
      </div>
    </div>
  );
}
