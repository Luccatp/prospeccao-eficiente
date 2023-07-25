import { title } from "process";
import { FC } from "react";
import LittleText from "./text/LittleText";
import Paragraph from "./text/Paragraph";

export interface LuisaDataProps {
  title: string;
  spec: string;
}

const LuisaData: FC<LuisaDataProps> = ({ title, spec }) => {
  return (
    <div className="flex flex-col gap-2">
      <LittleText className="text-sm">{title}</LittleText>
      <Paragraph>{spec}</Paragraph>
    </div>
  );
};

export default LuisaData;
