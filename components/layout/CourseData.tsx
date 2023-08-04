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
    title: "Tipos de prospecção",
    text: "Quais são os tipos de prospecção e qual é o melhor para você?",
  },
  {
    title: "Tipos de empresas",
    text: "Como as empresas se comportam é muito importam para o seu sucesso",
  },
  {
    title: "Como escolher um nicho",
    text: "O nicho é a principal escolha para o seu sucesso, saiba como escolher",
  },
  {
    title: "Fechar clientes por indicações",
    text: "Indicações são a forma mais certeira de se conseguir clients, saiba como",
  },
  {
    title: "Como fazer prospecção ativa",
    text: "Não adianta ficar esperando, você precisa ir atrás dos seus clientes",
  },
  {
    title: "O que fazer depois da prospecção",
    text: "A prospecção não acaba quando você fecha o cliente, saiba o que fazer depois",
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
    <div className="grid grid-cols-2 gap-y-11 gap-x-2 md:gap-y-11 md:gap-x-10">
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
