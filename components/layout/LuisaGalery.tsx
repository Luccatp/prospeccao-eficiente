"use client";
import { FC, useRef } from "react";
import LuisaData, { LuisaDataProps } from "./LuisaData";
import LottieAnimation from "../animations/LottieAnimation";
import Instagram from "@/public/instagram.json";
import Tiktok from "@/public/tiktok.json";
import Youtube from "@/public/youtube.json";
import LittleText from "./text/LittleText";
import MainText from "./text/MainText";
import Paragraph from "./text/Paragraph";

interface LuisaGaleryProps {}

const luisaData: LuisaDataProps[] = [
  {
    title: "Visualizações mensais ",
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
    <div className="grid sm:grid-cols-4 sm:auto-rows-min">
      <div>
        <LittleText>Quêm sou eu?</LittleText>
        <MainText>Luisa Oliveira</MainText>
      </div>
      <Paragraph className="text-gray-900 leading-7 tracking-wide my-12 text-lg sm:row-start-2 sm:self-center sm:row-span-2 sm:col-span-2 sm:text-4xl">
        Eu me chamo luisa, sou influenciadora há mais de 4 anos e há 5 meses
        trabalho como social media. Parece pouco tempo, né? Mas nesses 5 meses
        eu aprendi o suficiente para estar faturando o que eu sempre sonhei.
        Nesses 4 anos produzindo conteúdo, eu aprendi muito, errei e acertei — e
        cresci minhas contas ao ponto de acumular mais de 60.000 seguidores nas
        minhas redes sociais.
      </Paragraph>
      {/* <div className="grid grid-rows-3 grid-flow-col gap-4 sm:grid-rows-1 sm:row-span-2 sm:col-start-3 sm:row-start-2 sm:col-span-2 sm:self-center sm:grid-flow-row md:auto-rows-min">
        <LottieAnimation
          className="col-span-3 sm:col-span-1 md:col-span-2 md:justify-self-center"
          animationData={Instagram}
        />
        <LottieAnimation
          className="row-span-2 sm:col-span-1 md:row-span-1 md:justify-self-center"
          animationData={Youtube}
        />
        <LottieAnimation
          className="col-span-2 row-span-2 sm:col-span-1 sm:row-span-1 md:row-span-1 md:justify-self-center"
          animationData={Tiktok}
        />
      </div> */}
      {/* <div className="grid gap-5 sm:grid-flow-col sm:col-span-2 sm:col-start-3 sm:items-center">
        {luisaData.map(({ title, spec }) => (
          <LuisaData title={title} spec={spec} key={title + spec} />
        ))}
      </div> */}
    </div>
  );
};

export default LuisaGalery;
