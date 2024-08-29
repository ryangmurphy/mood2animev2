import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mood, moodToGenre } from "../types/Mood";
import fetchAnimeByGenre from "../lib/fetchAnimeByGenreId"; 
import { Anime } from "../types/Anime";

import { Button } from "@/components/ui/button";
import fetchAnimeById from "@/lib/fetchAnimeById";
import fetchGenres from "@/lib/fetchGenres";
import fetchAnimeByGenreId from "../lib/fetchAnimeByGenreId";

const MoodSelector: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const router = useRouter();

const handleMoodChange = async (mood: Mood) => {
  setSelectedMood(mood);

  const genres = moodToGenre[mood];
  const allAnime: Anime[] = [];

  // Fetch all genres
  const allGenres = await fetchGenres();

  // Filter genres based on the mood
  const matchingGenres = allGenres.filter((genre) =>
    genres.includes(genre.name)
  );

  for (const genre of matchingGenres) {
    // Fetch anime by genre ID
    const animeByGenre = await fetchAnimeByGenreId(genre.mal_id);
    allAnime.push(...animeByGenre);
  }

  if (allAnime.length > 0) {
    // Select a random anime
    const randomIndex = Math.floor(Math.random() * allAnime.length);
    const selectedAnime = allAnime[randomIndex];

    // Store the selected anime in session storage
    sessionStorage.setItem("selectedAnime", JSON.stringify(selectedAnime));

    // Redirect to the anime details page with the correct ID
    router.push(`/animes/${selectedAnime.mal_id}`);
  } else {
    console.error("No anime found for this mood.");
  }
};




  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-6 px-72 justify-center pt-8 mx-auto">
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
        <Button
          variant="secondary"
          size="lg"
          className="font-bold"
        >
          Only Choice
        </Button>
      </div>

      {selectedMood && (
        <div>
          <h3 className="font-bold text-white mt-8">You selected: {selectedMood}</h3>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
