export interface AnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface AnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeExplicitGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeTheme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeDemographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeRating {
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
}

export interface AnimeStreaming {
  name: string;
  url: string;
}

export interface AnimeImage {
  image_url: string;
  jpg: [
    {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    }
  ];
  webp: [
    {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    }
  ];
}

export interface Anime {
  url: string | undefined;
  id: string;
  mal_id: number;
  title: string;
  year: number | string | null;
  episodes: number;
  synopsis: string;
  demographics: AnimeDemographic[];
  trailer: AnimeTrailer;
  genres: AnimeGenre[];
  explicit_genres: AnimeExplicitGenre[];
  themes: AnimeTheme[];
  score: number;
  rank: number;
  popularity: string;
  streaming: AnimeStreaming;
  images: AnimeImage[];
}
