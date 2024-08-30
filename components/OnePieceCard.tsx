import { Anime } from "../types/Anime";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  anime: Anime | null;
}

const OnePieceCard: React.FC<Props> = ({ anime }) => {
  return (
    <div className="container">
      <Card className="bg-zinc-700 mx-auto rounded-lg w-full h-fit shadow-xl">
        <CardHeader className="flex flex-col justify-center items-center">
          <div className="mx-auto rounded-lg video-responsive w-full">
            <iframe
              width="1080"
              height="720"
              src="https://www.youtube.com/embed/TbHtbzAnZJ4"
              title="One Piece Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl w-full"
            ></iframe>
          </div>
        </CardHeader>

        <CardTitle className="text-white text-4xl py-4 ml-14">
          One Piece
        </CardTitle>

        <CardContent className="">
          <div className="flex flex-row justify-start container">
            <h3 className="text-2xl font-semibold text-white pr-2">1999</h3>
            <span className="text-2xl font-semibold text-white pr-2 mx-2">
              |
            </span>
            <h3 className="text-2xl font-semibold text-white pr-2">
              1116+ Episodes
            </h3>
            <span className="text-2xl font-semibold text-white pr-2">|</span>
            <h3 className="text-2xl font-semibold text-white pr-2">
              ⭐8.72
              <span className="text-white/70">/10</span>
            </h3>

            <span className="text-2xl font-semibold text-white pr-2">|</span>
            <h3 className="text-2xl font-semibold text-white pr-2">
              🏆Overall Rank:{" "}
              <span className="font-black tracking-wider text-destructive bg-white rounded-lg px-1 py-1">
                #54
              </span>
            </h3>

            <span className="text-2xl font-semibold text-white pr-2">|</span>
            <h3 className="text-2xl font-semibold text-white pr-2">
              🔥Popularity:{" "}
              <span className="font-black tracking-wider text-destructive bg-white rounded-lg px-1 py-1">
                #19
              </span>
            </h3>
          </div>
          <div className="">
            <ul className="flex flex-row justify-start container gap-4 pt-4">
              <Badge className="text-white" variant="destructive">
                Action
              </Badge>
              <Badge className="text-white" variant="destructive">
                Adventure
              </Badge>
              <Badge className="text-white" variant="destructive">
                Fantasy
              </Badge>
            </ul>
          </div>
          <CardDescription className="flex flex-col justify-center container mx-auto font-semibold text-slate-200 my-6">
            <p className="leading-relaxed tracking-wider">
              Barely surviving in a barrel after passing through a terrible
              whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship
              under attack by fearsome pirates. Despite being a naive-looking
              teenager, he is not to be underestimated. Unmatched in battle,
              Luffy is a pirate himself who resolutely pursues the coveted One
              Piece treasure and the King of the Pirates title that comes with
              it. The late King of the Pirates, Gol D. Roger, stirred up the
              world before his death by disclosing the whereabouts of his hoard
              of riches and daring everyone to obtain it. Ever since then,
              countless powerful pirates have sailed dangerous seas for the
              prized One Piece only to never return. Although Luffy lacks a crew
              and a proper ship, he is endowed with a superhuman ability and an
              unbreakable spirit that make him not only a formidable adversary
              but also an inspiration to many. As he faces numerous challenges
              with a big smile on his face, Luffy gathers one-of-a-kind
              companions to join him in his ambitious endeavor, together
              embracing perils and wonders on their once-in-a-lifetime
              adventure.
            </p>
          </CardDescription>
        </CardContent>

        <CardFooter className="flex flex-row justify-center container mx-auto gap-8">
          <Link href={`/`}>
            <Button className="bg-destructive  text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
              Home
            </Button>
          </Link>
          <a
            href="https://myanimelist.net/anime/21/One_Piece?cat=anime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-destructive text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
              View on MAL
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnePieceCard;
