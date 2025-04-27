"use client";
import Flare from "@/components/Branding/Flare";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedLetters } from "@/components/Branding/AnimatedLetters";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const [isMobile, setIsMobile] = React.useState(false);
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const adjustedScale = useTransform(scrollYProgress, (value) => value + 0.5);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.main
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      //exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7 }}
      className="text-white flex flex-col gap-10 items-center justify-center"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Flare
        flareStyle={{
          height: "100%",
          width: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          //@ts-ignore
          scale: isMobile ? 1 : adjustedScale,
          filter: "blur(30px)",
          rotate: "145deg",
          zIndex: -1,
          background:
            "radial-gradient(240vh 20vw at top right, red, blue, red, #ff450090, #ffff0010, transparent, transparent)",
        }}
        flare2Style={{
          height: "100%",
          width: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          //@ts-ignore
          scale: isMobile ? 1 : adjustedScale,
          filter: "blur(10px)",
          rotate: "145deg",
          zIndex: -1,
          background:
            "radial-gradient(240vh 5vw at top right, #ff4500, red, transparent, transparent)",
        }}
      />
      <AnimatedLetters
        title={true}
        text="Made  with  ♡  by  parv14206"
        withBlur={true}
        center
        className="title text-center items-center justify-center"
      />
      <div className="flex gap-10 ">
        <Link href="https://github.com/parv141206" target="_blank">
          <FaGithub className="text-3xl hover:text-gray-500 transition" />
        </Link>
        <Link href="https://instagram.com/calligraphic_parv" target="_blank">
          <FaInstagram className="text-3xl hover:text-gray-500 transition" />
        </Link>
        <Link href="mailto:parv141206@gmail.com" target="_blank">
          <FaEnvelope className="text-3xl hover:text-gray-500 transition" />
        </Link>
      </div>
    </motion.main>
  );
}
