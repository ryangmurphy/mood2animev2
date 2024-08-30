export type Mood =
  | "Happy"
  | "Gloomy"
  | "Exciting"
  | "Calm"
  | "Nostalgic"
  | "Melancholic"
  | "Inspired"
  | "Hopeful"
  | "Thrilling"
  | "Bored"
  | "Revengeful"
  | "Cynical"
  | "Adventurous"
  | "Lonely"
  | "Compassionate";

// Mapping moods to anime genres
export const moodToGenre: { [key in Mood]: string[] } = {
  Happy: ["Comedy", "Slice of Life", "Music"],
  Gloomy: ["Horror", "Mystery", "Psychological"],
  Exciting: ["Action", "Sports", "Mecha"],
  Calm: ["Iyashikei", "Gourmet", "Pets"],
  Nostalgic: ["Historical", "Romance", "Samurai"],
  Melancholic: ["Drama", "Psychological", "Slice of Life"],
  Inspired: ["Shounen", "Adventure", "Martial Arts"],
  Hopeful: ["Fantasy", "School", "Adventure"],
  Thrilling: ["Suspense", "High Stakes Game", "Horror"],
  Bored: ["Parody", "Gag Humor", "Fantasy"],
  Revengeful: ["Supernatural", "Military", "Action"],
  Cynical: ["Gore", "Seinen", "Thriller"],
  Adventurous: ["Isekai", "Space", "Adventure"],
  Lonely: ["Reincarnation", "Slice of Life", "Drama"],
  Compassionate: ["Shoujo", "Josei", "Drama"],
};


/*export const moodToGenre: { [key in Mood]: string[] } = {
  Happy: ["Comedy", "Slice of Life", "Adventure"],
  Gloomy: ["Drama", "Mystery", "Supernatural"],
  Exciting: ["Action", "Thriller", "Sports"],
  Calm: ["Slice of Life", "Iyashikei"],
  Nostalgic: ["Historical", "Romance", "School"],
  Melancholic: ["Drama", "Psychological", "Slice of Life"],
  Inspired: ["Drama", "Sports", "Shounen"],
  Hopeful: ["Drama", "Slice of Life", "Romance"],
  Thrilling: ["Thriller", "Horror", "Mystery"],
  Bored: ["Comedy", "Adventure", "Fantasy"],
  Revengeful: ["Action", "Drama", "Thriller"],
  Cynical: ["Psychological", "Seinen", "Drama"],
  Adventurous: ["Adventure", "Fantasy", "Action"],
  Lonely: ["Drama", "Slice of Life", "Romance"],
  Compassionate: ["Drama", "Slice of Life", "Shoujo"],
}
*/
