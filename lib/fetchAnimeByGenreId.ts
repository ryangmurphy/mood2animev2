import { Anime } from "../types/Anime";

const fetchAnimeByGenreId = async (genreId: number): Promise<Anime[]> => {
  try {
    const apiUrl = `https://api.jikan.moe/v4/anime?genres=${genreId}`;
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
