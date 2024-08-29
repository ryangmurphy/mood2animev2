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
    <div className="container">
      <Card className="bg-zinc-700 mx-auto rounded-lg w-full h-fit shadow-xl">
        <CardHeader className="flex flex-col justify-center items-center">
          {anime.trailer?.embed_url ? (
            <div className="mx-auto rounded-lg video-responsive w-full">
              <iframe
                width="1080"
                height="720"
                src={anime.trailer.embed_url}
                title={`${anime.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl w-full"
              ></iframe>
            </div>
          ) : (
            <Image
              src="/mm404.png"
              width={400}
              height={400}
              alt="No trailer available"
              className="rounded-lg w-fit h-fit"
            />
          )}
        </CardHeader>

        <CardTitle className="text-white text-4xl py-4 ml-14">
          {anime.title}
        </CardTitle>
        <CardContent className="">
          <div className="flex flex-row justify-start container">
            <h3 className="text-2xl font-medium text-white pr-2">
              {anime.year ?? "N/A"}
            </h3>
            <span className="text-2xl font-semibold text-white pr-2 mx-2">
              |
            </span>
            <h3 className="text-2xl font-medium text-white pr-2">
              {anime.episodes ?? "N/A"} Episodes
            </h3>
            <span className="text-2xl font-semibold text-white pr-2">|</span>
            <h3 className="text-2xl font-medium text-white pr-2">
              ⭐{anime?.score ? `${anime.score}/10` : "N/A"}
            </h3>
            {/*
          <span className="text-2xl font-semibold text-white pr-2">|</span>
          <h3 className="text-2xl font-medium text-white pr-2">
            {anime?.rank ? `#${anime.rank}` : "N/A"} Top Rated
          </h3>
          */}
            <span className="text-2xl font-semibold text-white pr-2">|</span>
            <h3 className="text-2xl font-medium text-white pr-2">
              🔥{anime.popularity ? `#${anime.popularity}` : "N/A"} Most Popular
            </h3>
          </div>
          <div className="">
            <ul className="flex flex-row justify-start container gap-4 pt-4">
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
          <CardDescription className="flex flex-col justify-center container mx-auto font-semibold text-slate-200 my-6">
            <p className="leading-relaxed">
              {anime.synopsis
                ? anime.synopsis.slice(0, -25)
                : "No synopsis available."}
            </p>
          </CardDescription>
        </CardContent>

        <CardFooter className="flex flex-row justify-center container mx-auto gap-8">
          <Link href={`/`}>
            <Button className="bg-destructive  text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
              Home
            </Button>
          </Link>
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            <Button className="bg-destructive text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
              View on MAL
            </Button>
          </a>
          <Link href={`/home`}>
            <Button className="bg-destructive text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
              NEXT
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnimeCard;
