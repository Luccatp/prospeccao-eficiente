"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface MainTextProps extends React.ComponentPropsWithoutRef<"h1"> {}

const MainText: FC<MainTextProps> = ({ className, children }) => {
  return (
    <motion.h2
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.3,
      }}
      className={`${className}  text-4xl font-bold text-gray-700 sm:text-5xl`}
    >
      {children}
    </motion.h2>
  );
};

export default MainText;
