"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface LittleTextProps extends React.ComponentPropsWithoutRef<"span"> {}

const LittleText: FC<LittleTextProps> = ({ children, className }) => {
  return (
    <motion.span
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.7,
      }}
      className={`${className} text-gray-500 sm:text-xl`}
    >
      {children}
    </motion.span>
  );
};

export default LittleText;
