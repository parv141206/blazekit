"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export default function ScrollDemo() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // scroll triggers from bottom of screen to top
  });

  // Create animations
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[200vh] bg-black text-white">
      <div className="h-[100vh] flex items-center justify-center">
        <h1>Scroll down 👇</h1>
      </div>

      <div
        ref={targetRef}
        className="h-[100vh] flex items-center justify-center"
      >
        <motion.div
          style={{ opacity, scale, x }}
          className="bg-orange-500 p-10 rounded-xl text-3xl"
        >
          Scroll-Aware Box
        </motion.div>
      </div>
    </div>
  );
}
