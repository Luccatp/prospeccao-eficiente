"use client";
import { FC, useRef } from "react";
import LuisaData, { LuisaDataProps } from "./LuisaData";
import LottieAnimation from "../animations/LottieAnimation";
import Instagram from "@/public/instagram.json";
import Tiktok from "@/public/tiktok.json";
import Youtube from "@/public/youtube.json";
import LittleText from "./text/LittleText";
import MainText from "./text/MainText";

interface LuisaGaleryProps {}

const luisaData: LuisaDataProps[] = [
  {
    title: "Visualizações mensais",
    spec: "2M",
  },
  {
    title: "Wow sou foda",
    spec: "110M",
  },
  {
    title: "Seguidores",
    spec: "1M",
  },
];

const LuisaGalery: FC<LuisaGaleryProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <LittleText>Quêm sou eu?</LittleText>
      <MainText>Luisa Oliveira</MainText>
      <p className="text-gray-900 my-12 text-lg">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <LottieAnimation className="col-span-3" animationData={Instagram} />
        <LottieAnimation className="row-span-2" animationData={Youtube} />
        <LottieAnimation
          className="col-span-2 row-span-2"
          animationData={Tiktok}
        />
      </div>
      <div className="grid gap-5">
        {luisaData.map(({ title, spec }) => (
          <LuisaData title={title} spec={spec} key={title + spec} />
        ))}
      </div>
    </div>
  );
};

export default LuisaGalery;
