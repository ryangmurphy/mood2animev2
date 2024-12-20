
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchGenres = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/genres/anime`, {
      next: { revalidate: 86400 }, 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch genres: ${error.message}`);
    }
    return [];
  }
};

export default fetchGenres;
