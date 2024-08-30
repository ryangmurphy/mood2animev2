import React from "react";
import Navbar from "@/components/Navbar";
import MoodSelector from "@/components/MoodSelector";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center bg-zinc-900 w-full"
    >
      <h1 className="text-4xl font-bold text-white capitalize">
        Explore the top-rated Anime tailored to your mood
      </h1>
      <h3 className="text-2xl font-bold text-white capitalize pt-6">
        Pick how you are feeling!
      </h3>
      <MoodSelector />
    </div>
  );
}
