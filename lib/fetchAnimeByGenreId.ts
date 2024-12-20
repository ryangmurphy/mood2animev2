import { Anime } from "../types/Anime";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const RANDOM_PAGE_LIMIT = 20; 

const fetchAnimeByGenreId = async (genreId: number): Promise<Anime[]> => {
  try {
    const randomPage = Math.floor(Math.random() * RANDOM_PAGE_LIMIT) + 1; 
    const response = await fetch(
      `${API_BASE_URL}/top/anime?genres=${genreId}&page=${randomPage}`,
      {
        next: { revalidate: 3600 }, 
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data; // Return the list of anime for the genre
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch anime by genre: ${error.message}`);
    }
    return [];
  }
};

export default fetchAnimeByGenreId;
