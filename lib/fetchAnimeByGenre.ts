import axios from 'axios';
import { Anime } from '../types/Anime';

const fetchAnimeByGenre = async (genre: string): Promise<Anime[]> => {
  try {
    const apiUrl = 'https://api.jikan.moe/v4/anime';
    const response = await axios.get<{ data: Anime[] }>(apiUrl, {
      params: {
        genre: genre, 
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('API Error', error);
    return [];
  }
};

export default fetchAnimeByGenre;

