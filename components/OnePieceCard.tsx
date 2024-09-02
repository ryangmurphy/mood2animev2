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
    <div className="container mx-auto p-4">
      <Card className="bg-zinc-700 mx-auto w-full max-w-[800px] rounded-2xl overflow-hidden">
        <CardHeader className="aspect-video p-4">
          <div className="relative w-full md:w-full lg:w-full pb-[56.25%] mb-4 h-64 md:h-full lg:h-full">
            <iframe
              width="1080"
              height="720"
              src="https://www.youtube.com/embed/TbHtbzAnZJ4"
              title="One Piece Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute w-full h-full rounded-2xl "
            ></iframe>
          </div>
        </CardHeader>

        <CardTitle className="text-white font-extrabold text-2xl md:text-4xl pb-2 md:pb-4 lg:pb-4 lg:text-4xl text-center md:text-left lg:text-left pl-4">
          One Piece
        </CardTitle>

        <CardContent>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-4 text-sm md:text-base">
            <h3 className="text-md sm:text-base font-semibold text-white">
              1999
            </h3>
            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>
            <h3 className="text-md sm:text-md font-semibold text-white">
              1116+ Episodes
            </h3>
            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>
            <h3 className="text-md sm:text-md font-semibold text-white">
              ⭐8.72
              <span className="text-white/70">/10</span>
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>
            <h3 className="text-md sm:text-md font-semibold text-white">
              🏆Overall Rank:{" "}
              <span className="font-black tracking-wider text-destructive bg-white rounded-lg px-1 py-1">
                #54
              </span>
            </h3>

            <span className="text-sm text-white hidden sm:inline-block tracking-tighter">
              ✦
            </span>
            <h3 className="text-md sm:text-md font-semibold text-white">
              🔥Popularity:{" "}
              <span className="font-black tracking-wider text-destructive bg-white rounded-lg px-1 py-1">
                #19
              </span>
            </h3>
          </div>

          <div className="pt-6">
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-start gap-4">
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

          <CardDescription className="flex flex-col justify-center mx-auto font-semibold text-slate-200 my-6 text-center sm:text-left">
            <p className="leading-relaxed tracking-wider overflow-auto text-sm md:text-base lg:text-base">
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

        <CardFooter className="flex flex-row justify-center gap-8 pb-6">
          <Link href={`/`}>
            <Button className="bg-destructive text-white font-semibold py-2 px-4 rounded-xl hover:bg-destructive/70">
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
