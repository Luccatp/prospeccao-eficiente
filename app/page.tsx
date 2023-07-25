import Button from "@/components/Button";
import LottieAnimation from "@/components/animations/LottieAnimation";
import CourseData from "@/components/layout/CourseData";
import Footer from "@/components/layout/Footer";
import LuisaGalery from "@/components/layout/LuisaGalery";
import LittleText from "@/components/layout/text/LittleText";
import MainText from "@/components/layout/text/MainText";
import Paragraph from "@/components/layout/text/Paragraph";
import ebookAnimation from "@/public/e-book.json";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container flex flex-col items-center">
      <section className="mt-16 grid h-screen">
        <LittleText>Como achar os seus clientes?</LittleText>
        <h1 className="text-5xl font-bold text-gray-700">
          Prospecção Eficiente
        </h1>
        <LottieAnimation
          animationData={ebookAnimation}
          className="w-32 h-32 justify-self-center mt-4"
        />
        <p className="my-12">
          Nesse E-book vou te ensinar técnicas eficientes e comprovadas de como
          sair do 0 ao primeiro cliente.
        </p>
        <Button>COMPRE AGORA O E-BOOK!</Button>
      </section>
      <section className="flex my-20 flex-col">
        <MainText>Você não está sozinho nessa jornada!</MainText>
        <p className="text-gray-900 mt-12 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi animi iure error reiciendis iusto. Veritatis quos est
          corporis molestiae ipsam, praesentium eum sit eius harum blanditiis ex
          distinctio temporibus.
        </p>
      </section>
      <section className="grid gap-14">
        <LuisaGalery />
        <Button className="text-xs justify-self-end">ADQUIRA O E-BOOK!</Button>
      </section>
      <section className="my-20 flex flex-wrap gap-10">
        <MainText>O que você vai aprender?</MainText>
        <CourseData />
        <Button className="text-sm">COMPRE AGORA O E-BOOK</Button>
      </section>
      <Footer />
    </main>
  );
}
