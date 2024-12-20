import { Anime } from "../types/Anime";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchAnimeById = async (id: number): Promise<Anime | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime/${id}`, {
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch anime: ${error.message}`);
    }
    return null;
  }
};

export default fetchAnimeById;
