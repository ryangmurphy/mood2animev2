import { Anime } from "../types/Anime";

const fetchAnimeByGenreId = async (genreId: number): Promise<Anime[]> => {
  try {
    // Select a random page number between 1 and the last page
    const randomPage = Math.floor(Math.random() * 20) + 1; 
    const apiUrl = `https://api.jikan.moe/v4/top/anime?genres=${genreId}&page=${randomPage}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data; // Return the list of anime for the genre
  } catch (error) {
    console.error("API Error", error);
    return [];
  }
};

export default fetchAnimeByGenreId;
