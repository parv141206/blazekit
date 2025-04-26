"use client";

import { motion } from "motion/react";
import React from "react";

type FlareProps = {
  flareStyle?: React.CSSProperties;
  flare2Style?: React.CSSProperties;
};

export default function Flare({ flareStyle, flare2Style }: FlareProps) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          scale: 1,
          translateX: 800,
          translateY: -500,
          filter: "blur(200px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: 0,
          translateY: 0,
          filter: "blur(40px)",
        }}
        transition={{ duration: 3.6, ease: "easeOut" }}
        style={flareStyle}
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 1,
          translateX: 800,
          translateY: -700,
          filter: "blur(200px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: 0,
          translateY: 0,
          filter: "blur(10px)",
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        style={flare2Style}
      />
    </>
  );
}
