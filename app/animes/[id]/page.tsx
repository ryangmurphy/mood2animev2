"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/types/Anime";

import Navbar from "@/components/Navbar";



export default function SelectedAnimePage() {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const selectedAnime = sessionStorage.getItem("selectedAnime");
    if (selectedAnime) {
      setAnime(JSON.parse(selectedAnime));
      setIsLoading(false);
    } else {
      setError("No anime data available");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-slate-800 h-full">
      <div className="py-12">
        <Navbar />
      </div>
        {anime ? (
          <AnimeCard anime={anime} />
        ) : (
          <div>No anime data available</div>
        )}
      </div>
  );
}