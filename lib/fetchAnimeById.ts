import { Anime } from "../types/Anime";

const fetchAnimeById = async (id: number): Promise<Anime | null> => {
  try {
    const apiUrl = `https://api.jikan.moe/v4/top/anime/${id}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("API Error", error);
    return null;
  }
};

export default fetchAnimeById;
