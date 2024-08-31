import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mood, moodToGenre } from "../types/Mood";
import { Anime } from "../types/Anime";

import { Button } from "@/components/ui/button";
import fetchGenres from "@/lib/fetchGenres";
import fetchAnimeByGenreId from "../lib/fetchAnimeByGenreId";
import Link from "next/link";

import { shuffle } from "lodash";

const MoodSelector: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const router = useRouter();

  const handleMoodChange = async (mood: Mood) => {
    setSelectedMood(mood);

    const genres = moodToGenre[mood];

    // Fetch all genres
    const allGenres = await fetchGenres();

    // Filter genres based on the mood
    const matchingGenres = allGenres.filter((genre: { name: string }) =>
      genres.includes(genre.name)
    );

    if (matchingGenres.length > 0) {
      // Step 1: Shuffle genres and select the first one
      const shuffledGenres = shuffle(matchingGenres);
      const randomGenre = shuffledGenres[0]; // Pick the first from shuffled
      console.log(`Selected Genre: ${randomGenre.name}`);

      // Step 2: Fetch anime from the selected genre
      const animeByGenre = await fetchAnimeByGenreId(randomGenre.mal_id);

      if (animeByGenre.length > 0) {
        // Step 3: Shuffle anime list and select the first one
        const shuffledAnime = shuffle(animeByGenre);
        const randomAnime = shuffledAnime[0];
        console.log(`Selected Anime: ${randomAnime.title}`);

        // Store the selected anime in session storage
        sessionStorage.setItem("selectedAnime", JSON.stringify(randomAnime));

        // Redirect to the anime details page with the correct ID
        router.push(`/animes/${randomAnime.mal_id}`);
      } else {
        console.error("No anime found for the selected genre.");
      }
    } else {
      console.error("No matching genres found for this mood.");
    }
  };

  return (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 py-4">
      {Object.keys(moodToGenre).map((moodKey) => {
        const mood = moodKey as Mood;
        return (
          <Button
            variant="secondary"
            size="lg"
            className="font-bold w-full"
            key={mood}
            onClick={() => handleMoodChange(mood)}
          >
            {mood}
          </Button>
        );
      })}
      <Link href={`/one-piece`}>
        <Button variant="secondary" size="lg" className="font-bold w-full">
          The Best Anime
        </Button>
      </Link>
    </div>

    {selectedMood && (
      <div className="text-center mt-6">
        <h3 className="font-bold text-white">
          You selected: {selectedMood}
        </h3>
      </div>
    )}
  </div>
)
};

export default MoodSelector;