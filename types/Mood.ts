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
  | "Compassionate"
  | "Random";

// Mapping moods to anime genres
export const moodToGenre: { [key in Mood]: string[] } = {
    Happy: ["Comedy", "Slice of Life", "Music", "CGDCT", "Adventure"],
    Gloomy: ["Drama", "Mystery", "Supernatural", "Psychological", "Horror"],
    Exciting: ["Action", "Sports", "Mecha", "Super Power", "Martial Arts"],
    Calm: ["Slice of Life", "Iyashikei", "Gourmet", "Childcare", "Pets"],
    Nostalgic: ["Historical", "Romance", "School", "Samurai", "Music"],
    Melancholic: ["Drama", "Psychological", "Slice of Life", "Tragedy", "Romance"],
    Inspired: ["Drama", "Sports", "Shounen", "Martial Arts", "Music"],
    Hopeful: ["Drama", "Slice of Life", "Romance", "School", "Fantasy"],
    Thrilling: ["Thriller", "Horror", "Mystery", "Suspense", "High Stakes Game"],
    Bored: ["Comedy", "Adventure", "Fantasy", "Parody", "Gag Humor"],
    Revengeful: ["Action", "Drama", "Thriller", "Supernatural", "Military"],
    Cynical: ["Psychological", "Seinen", "Drama", "Gore", "Military"],
    Adventurous: ["Adventure", "Fantasy", "Action", "Isekai", "Space"],
    Lonely: ["Drama", "Slice of Life", "Romance", "Music", "Reincarnation"],
    Compassionate: ["Drama", "Slice of Life", "Shoujo", "Josei", "Family"],
  Random: [
    "Action",
    "Adventure",
    "Avant Garde",
    "Award Winning",
    "Boys Love",
    "Comedy",
    "Drama",
    "Fantasy",
    "Girls Love",
    "Gourmet",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Suspense",
    "Ecchi",
    "Erotica",
    "Hentai",
    "Adult Cast",
    "Anthropomorphic",
    "CGDCT",
    "Childcare",
    "Combat Sports",
    "Crossdressing",
    "Delinquents",
    "Detective",
    "Educational",
    "Gag Humor",
    "Gore",
    "Harem",
    "High Stakes Game",
    "Historical",
    "Idols (Female)",
    "Idols (Male)",
    "Isekai",
    "Iyashikei",
    "Love Polygon",
    "Magical Sex Shift",
    "Mahou Shoujo",
    "Martial Arts",
    "Mecha",
    "Medical",
    "Military",
    "Music",
    "Mythology",
    "Organized Crime",
    "Otaku Culture",
    "Parody",
    "Performing Arts",
    "Pets",
    "Psychological",
    "Racing",
    "Reincarnation",
    "Reverse Harem",
    "Romantic Subtext",
    "Samurai",
    "School",
    "Showbiz",
    "Space",
    "Strategy Game",
    "Super Power",
    "Survival",
    "Team Sports",
    "Time Travel",
    "Vampire",
    "Video Game",
    "Visual Arts",
    "Workplace",
    "Josei",
    "Kids",
    "Seinen",
    "Shoujo",
    "Shounen",
  ],
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
