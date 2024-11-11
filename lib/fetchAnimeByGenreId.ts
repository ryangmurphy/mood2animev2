import { Anime } from "../types/Anime";

const RANDOM_PAGE_LIMIT = 20; // Define a constant for clarity

const fetchAnimeByGenreId = async (genreId: number): Promise<Anime[]> => {
  try {
    const randomPage = Math.floor(Math.random() * RANDOM_PAGE_LIMIT) + 1; 
    const apiUrl = `https://api.jikan.moe/v4/top/anime?genres=${genreId}&page=${randomPage}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`); // More context in error
    }

    const data = await response.json();
    return data.data; // Return the list of anime for the genre
  } catch (error) {
    console.error("API Error:", error); // Include error context
    return [];
  }
};

export default fetchAnimeByGenreId;
