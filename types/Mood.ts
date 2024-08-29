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
  Happy: ["Comedy", "Slice of Life", "Music", "Adventure"],
  Gloomy: ["Horror", "Mystery", "Psychological", "Supernatural", "Drama"],
  Exciting: ["Action", "Sports", "Mecha", "Super Power", "Martial Arts"],
  Calm: ["Iyashikei", "Gourmet", "Childcare", "Pets", "Slice of Life"],
  Nostalgic: ["Historical", "Romance", "School", "Samurai", "Music"],
  Melancholic: [
    "Tragedy",
    "Drama",
    "Psychological",
    "Romance",
    "Slice of Life",
  ],
  Inspired: ["Shounen", "Sports", "Music", "Martial Arts", "Adventure"],
  Hopeful: ["Fantasy", "Romance", "Slice of Life", "School", "Adventure"],
  Thrilling: ["Thriller", "Suspense", "Mystery", "High Stakes Game", "Horror"],
  Bored: ["Parody", "Gag Humor", "Comedy", "Adventure", "Fantasy"],
  Revengeful: ["Revenge", "Supernatural", "Thriller", "Military", "Action"],
  Cynical: ["Gore", "Psychological", "Seinen", "Military", "Thriller"],
  Adventurous: ["Isekai", "Fantasy", "Space", "Action", "Adventure"],
  Lonely: ["Music", "Reincarnation", "Slice of Life", "Romance", "Drama"],
  Compassionate: ["Shoujo", "Josei", "Family", "Slice of Life", "Drama"],
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
