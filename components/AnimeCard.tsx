import { Anime } from "../types/Anime";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  anime: Anime | null;

}


const AnimeCard: React.FC<Props> = ({ anime }) => {
  if (!anime) {
    return <p>No anime data found.</p>;
  }

  const combinedGenres = [
    ...anime.genres.map((g) => ({ ...g, explicit: false })),
    ...anime.explicit_genres.map((g) => ({ ...g, explicit: true })),
  ];

  return (
    <div className="container mx-auto p-4">
      <Card className="bg-zinc-700 mx-auto w-full max-w-[800px] rounded-2xl overflow-hidden shadow-lg">
        <CardHeader className="aspect-video p-4 relative">
          {anime.trailer?.embed_url ? (
            <div className="relative w-full md:w-full lg:w-full pb-[56.25%] mb-4 h-64 md:h-full lg:h-full">
              <iframe
                src={anime.trailer.embed_url}
                title={`${anime.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute w-full h-full rounded-2xl hover:shadow-lg transition-shadow duration-300"
              ></iframe>
            </div>
          ) : (
            <Image
              src="/trailer-notfound.jpg"
              width={400}
              height={400}
              alt="No trailer available"
              priority
              className="rounded-lg w-full h-64 md:h-96 lg:h-96"
            />
          )}
        </CardHeader>

        <CardTitle className="text-white font-extrabold text-3xl md:text-4xl pb-2 md:pb-4 lg:pb-4 lg:text-4xl text-center md:text-left lg:text-left pl-4">
          {anime.title_english ?? anime.title}
        </CardTitle>

        <CardContent>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-4 text-sm md:text-base">
            <h3 className="text-md sm:text-base font-semibold text-white">
              {anime.year ?? anime.aired.prop.from.year}
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>

            <h3 className="text-md sm:text-md font-semibold text-white">
              {anime.type === "Movie"
                ? `🎬 Movie`
                : `${anime.episodes ?? "N/A"} Episodes`}
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>

            <h3 className="text-md sm:text-md font-semibold text-white">
              ⭐{anime?.score ? `${anime.score}` : "N/A"}
              <span className="text-white/70">/10</span>
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>

            <h3 className="text-md sm:text-md font-bold text-white">
              🏆 Rank:{" "}
              <span className="font-black text-destructive bg-white rounded-lg px-1">
                {anime?.rank ? `#${anime.rank}` : "N/A"}
              </span>
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>

            <h3 className="text-md sm:text-md font-bold text-white">
              🔥 Popularity:{" "}
              <span className="font-black text-destructive bg-white rounded-lg px-1">
                {anime.popularity ? `#${anime.popularity}` : "N/A"}
              </span>
            </h3>
          </div>

          <div className="pt-6">
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-start gap-4">
              {combinedGenres.length > 0 ? (
                combinedGenres.map((genre) => (
                  <Badge
                    key={genre.mal_id}
                    className="text-white"
                    variant="destructive"
                  >
                    <a
                      href={genre.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {genre.name} {genre.explicit && "(Explicit)"}
                    </a>
                  </Badge>
                ))
              ) : (
                <p>No genres available</p>
              )}
            </ul>
          </div>

          <CardDescription className="flex flex-col justify-center mx-auto font-semibold text-slate-200 my-6 text-center sm:text-left">
            <p className="leading-relaxed tracking-wider overflow-auto text-sm md:text-base lg:text-base">
              {anime.synopsis
                ? anime.synopsis.replace("[Written by MAL Rewrite]", "").trim()
                : "No synopsis available."}
            </p>
          </CardDescription>
        </CardContent>

        <CardFooter className="flex flex-row justify-center gap-8 pb-6">
          <Link href={`/`}>
            <Button className="bg-primary text-white font-semibold py-2 px-4 rounded-xl hover:bg-primary/70">
              Home
            </Button>
          </Link>
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-white font-semibold py-2 px-4 rounded-xl hover:bg-primary/70">
              View on MAL
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnimeCard;
