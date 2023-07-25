import { FC } from "react";
import LittleText from "./text/LittleText";
import Paragraph from "./text/Paragraph";

interface CourseDataProps {}

interface Info {
  title: string;
  text: string;
  className?: string;
}

const textInfo: Info[] = [
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
];

const Info = ({ title, text, className }: Info) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <LittleText className="text-gray-500 text-sm">{title}</LittleText>
    <Paragraph className="text-gray-900 text-lg">{text}</Paragraph>
  </div>
);

const CourseData: FC<CourseDataProps> = ({}) => {
  return (
    <div className="grid grid-cols-2 gap-y-11 gap-x-2">
      {textInfo.map(({ title, text, className }, index) => (
        <Info
          title={title}
          text={text}
          key={index}
          className={index % 3 === 0 ? "col-span-2" : `col-span-1`}
        />
      ))}
    </div>
  );
};

export default CourseData;
