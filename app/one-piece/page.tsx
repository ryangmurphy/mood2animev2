"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/types/Anime";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnePieceCard from "@/components/OnePieceCard";

export default function OnePiecePage() {

  return (
    <div className="bg-zinc-900 h-full">
      <div className="py-12">
        <Navbar />
      </div>
      <OnePieceCard anime={null}  />
      <Footer />
    </div>
  );
}
