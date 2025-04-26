"use client";

import Flare from "@/components/Flare";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { AnimatedLetters } from "@/components/AnimatedLetters";

const blazeKitTaglines = [
  "One file. Infinite firepower. Meet schema.blaze.",
  "Fuel your project from a single spark — schema.blaze.",
  "Define once. Blaze infinitely. Powered by schema.blaze.",
  "From zero to blazing fast — all from schema.blaze.",
  "Your entire stack. Ignited by one file: schema.blaze.",
  "Light the fuse — everything starts with schema.blaze.",
];
export default function Home() {
  return (
    <main>
      <Flare
        flareStyle={{
          height: "180vh",
          width: "100vw",
          position: "fixed",
          top: "-110vh",
          right: "10vw",
          scale: "1.2",
          filter: "blur(30px)",
          rotate: "145deg",
          zIndex: -1,
          background:
            "radial-gradient(240vh 20vw at top right, red, blue, red, #ff450090, #ffff0010, transparent, transparent)",
        }}
        flare2Style={{
          height: "180vh",
          width: "100vw",
          position: "fixed",
          top: "-110vh",
          right: "0vw",
          scale: "1.2",
          filter: "blur(10px)",
          rotate: "145deg",
          zIndex: -1,

          background:
            "radial-gradient(240vh 5vw at top right, #ff4500, red, transparent, transparent)",
        }}
      />

      <section className="h-screen relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={"/logo.svg"}
            width={500}
            height={700}
            className="drop-shadow-2xl drop-shadow-red-700"
            alt="logo"
          />
        </motion.div>
        <div className="absolute top-10 left-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-9xl  title font-extrabold text-[#FF4F00] drop-shadow-black"
          >
            <AnimatedLetters
              text={"Blazekit"}
              title={true}
              letterClassName="text-9xl text-[#FF4F00]"
            />
          </motion.div>
          <div className="w-2/3">
            <AnimatedLetters text={blazeKitTaglines[1]} />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-xl absolute bottom-10 right-10 title font-extrabold text-[#FF4F00] drop-shadow-black"
        >
          Scroll to know more
        </motion.div>
      </section>

      <ThemeToggle />
    </main>
  );
}
