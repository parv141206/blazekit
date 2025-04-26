"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

interface AnimatedLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
  withBlur?: boolean;
  title?: boolean;
}

const letterVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: -90,
    scale: 0.8,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const containerVariants = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2 * i,
    },
  }),
};

export const AnimatedLetters = ({
  text,
  className = "",
  letterClassName = "",
  withBlur = true,
  title,
}: AnimatedLettersProps) => {
  const words = useMemo(() => (text ?? "").split(" "), [text]);

  return (
    <motion.div
      className={`flex flex-wrap text-white items-start justify-start gap-x-2 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          className="flex"
          style={{ whiteSpace: "nowrap" }}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className={`${title ? "text-9xl" : "text-xl"} select-none ${letterClassName}`}
              style={{
                display: "inline-block",
                perspective: "1000px",
                filter: withBlur ? undefined : "blur(0px)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};
