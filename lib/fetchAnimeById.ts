import axios from "axios";
import { Anime } from "../types/Anime";

const fetchAnimeById = async (id: string): Promise<Anime | null> => {
  try {
    const apiUrl = "https://api.jikan.moe/v4";
    const response = await axios.get<{ data: Anime }>(`${apiUrl}/anime/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("API Error", error);
    return null;
  }
};

export default fetchAnimeById;
