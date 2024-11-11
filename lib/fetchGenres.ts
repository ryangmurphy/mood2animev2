import { Anime } from "../types/Anime";

const fetchGenres = async (): Promise<any[]> => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/genres/anime");
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // This contains the list of genres
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export default fetchGenres;
