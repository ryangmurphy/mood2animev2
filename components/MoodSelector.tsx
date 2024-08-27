import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mood, moodToGenre } from "../types/Mood";
import fetchAnimeByGenre from "../lib/fetchAnimeByGenre"; 
import { Anime } from "../types/Anime";

import { Button } from "@/components/ui/button";

const MoodSelector: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const router = useRouter();

  const handleMoodChange = async (mood: Mood) => {
    setSelectedMood(mood);

    const genres = moodToGenre[mood];
    const allAnime: Anime[] = [];

    for (const genre of genres) {
      const animeByGenre = await fetchAnimeByGenre(genre);
      allAnime.push(...animeByGenre);
    }

    if (allAnime.length > 0) {
      const randomIndex = Math.floor(Math.random() * allAnime.length);
      const selectedAnime = allAnime[randomIndex];
      // Store the anime ID in session storage or state to use in the new page
      sessionStorage.setItem("selectedAnime", JSON.stringify(selectedAnime));
      router.push(`/animes/{id}`);
    } else {
      // Handle case where no anime is found
      console.error("No anime found for this mood.");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 justify-center pt-8">
        {Object.keys(moodToGenre).map((moodKey) => {
          const mood = moodKey as Mood;
          return (
            <Button
              variant="secondary"
              size="lg"
              className="font-bold"
              key={mood}
              onClick={() => handleMoodChange(mood)}
            >
              {mood}
            </Button>
          );
        })}
      </div>

      {selectedMood && (
        <div>
          <h3>You selected: {selectedMood}</h3>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
