"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface ParagraphProps extends React.ComponentPropsWithoutRef<"p"> {}

const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
      className={`${className} text-gray-900 text-lg sm:text-2xl`}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
