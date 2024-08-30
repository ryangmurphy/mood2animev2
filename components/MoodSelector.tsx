import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mood, moodToGenre } from "../types/Mood";
import { Anime } from "../types/Anime";

import { Button } from "@/components/ui/button";
import fetchGenres from "@/lib/fetchGenres";
import fetchAnimeByGenreId from "../lib/fetchAnimeByGenreId";
import Link from "next/link";

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
      // Step 1: Randomly select a genre from the matching genres
      const randomGenre =
        matchingGenres[Math.floor(Math.random() * matchingGenres.length)];
      console.log(`Selected Genre: ${randomGenre.name}`);

      // Step 2: Fetch anime from the selected genre
      const animeByGenre = await fetchAnimeByGenreId(randomGenre.mal_id);

      if (animeByGenre.length > 0) {
        // Step 3: Select a random anime from the genre
        const randomAnime =
          animeByGenre[Math.floor(Math.random() * animeByGenre.length)];
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
    <div className="container">
      <div className="grid grid-cols-4 gap-6 px-72 justify-center py-8 mx-auto">
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
        <Link href={`/one-piece`}>
          <Button variant="secondary" size="lg" className="font-bold">
            The Best Anime
          </Button>
        </Link>
      </div>

      {selectedMood && (
        <div>
          <h3 className="font-bold text-white mt-8">
            You selected: {selectedMood}
          </h3>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
