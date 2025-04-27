"use client";

import Flare from "@/components/Branding/Flare";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedLetters } from "@/components/Branding/AnimatedLetters";
import BlazeSchemaSection from "@/components/Branding/BlazeSchemaSection";
import RunningCommandSection from "@/components/Branding/RunningCommandSection";
import CreateConfigSection from "@/components/Branding/CreateConfigSection";
import Code from "@/components/Code";
import Card from "@/components/Card";

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const horizontalContentRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const numberOfItems = 3;
  const translationDistance = -(numberOfItems - 1) * 100;

  const xTranslation = useTransform(
    scrollYProgress,
    [0, 1],
    [`0vw`, `${translationDistance}vw`],
  );

  if (isMobile) {
    return (
      <div className="py-8">
        <div className="flex flex-col gap-24 md:px-4">
          <CreateConfigSection />
          <BlazeSchemaSection />
          <RunningCommandSection />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: "500vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "110vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          ref={horizontalContentRef}
          style={{
            display: "flex",
            x: xTranslation,
          }}
        >
          <motion.section
            initial={{ filter: "blur(40px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <CreateConfigSection />
          </motion.section>

          <motion.section
            initial={{ filter: "blur(40px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <BlazeSchemaSection />
          </motion.section>

          <motion.section
            initial={{ filter: "blur(40px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <RunningCommandSection />
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

const blazeKitTaglines = [
  "One file. Infinite firepower. Meet schema.blaze.",
  "Fuel your project from a single spark — schema.blaze.",
  "Define once. Blaze infinitely. Powered by schema.blaze.",
  "From zero to blazing fast — all from schema.blaze.",
  "Your entire stack. Ignited by one file: schema.blaze.",
  "Light the fuse — everything starts with schema.blaze.",
];

export default function Home() {
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const adjustedScale = useTransform(scrollYProgress, (value) => value + 0.5);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main>
      <Flare
        flareStyle={{
          height: isMobile ? "100vh" : "180vh",
          width: "100vw",
          position: "fixed",
          //@ts-ignore
          scale: isMobile ? 1 : adjustedScale,
          top: `-${isMobile ? 50 : 110}vh`,
          right: isMobile ? "0" : "10vw",
          filter: "blur(30px)",
          rotate: "145deg",
          zIndex: -1,
          background:
            "radial-gradient(240vh 20vw at top right, red, blue, red, #ff450090, #ffff0010, transparent, transparent)",
        }}
        flare2Style={{
          height: isMobile ? "100vh" : "180vh",
          width: "100vw",
          position: "fixed",
          top: isMobile ? "-50vh" : "-110vh",
          right: "0vw",
          //@ts-ignore
          scale: isMobile ? 1 : adjustedScale,
          filter: "blur(10px)",
          rotate: "145deg",
          zIndex: -1,
          background:
            "radial-gradient(240vh 5vw at top right, #ff4500, red, transparent, transparent)",
        }}
      />

      <section
        ref={hero}
        className="h-screen z-10 w-full relative flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={"/logo.svg"}
            width={isMobile ? 250 : 500}
            height={isMobile ? 350 : 700}
            className="drop-shadow-2xl drop-shadow-red-700"
            alt="logo"
          />
        </motion.div>
        <div
          className={`absolute ${isMobile ? "top-20 left-4" : "top-10 left-10"}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-5xl title font-extrabold text-[#FF4F00] drop-shadow-black"
          >
            <AnimatedLetters
              text={"Blazekit"}
              title={true}
              letterClassName={`${isMobile ? "text-4xl" : "md:text-9xl text-5xl"} text-[#FF4F00]`}
            />
          </motion.div>
          <div className={`${isMobile ? "w-full text-sm" : "w-2/3"}`}>
            <AnimatedLetters text={blazeKitTaglines[1]} />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className={`${isMobile ? "text-sm absolute bottom-4 right-4" : "text-xl absolute bottom-10 right-10"} title font-extrabold text-[#FF4F00] drop-shadow-black`}
        >
          Scroll to know more
        </motion.div>
      </section>
      <HorizontalScrollSection />
      <motion.section
        initial={{ filter: "blur(40px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen gap-20 dark:text-white flex flex-col items-center px-4"
      >
        <div className={`${isMobile ? "text-3xl" : "text-5xl"} text-center`}>
          What after compiling?
        </div>
        <div
          className={`flex ${isMobile ? "flex-col" : "items-center"} gap-10 justify-center`}
        >
          <Code
            code={`model User {
  name: string
  email: string
  age: number
}
model Programmer {
  name: string
  email: string
  age: number
  swag: string
}`}
            fileName="schema.blaze"
          />
          <div
            className={
              isMobile ? "text-5xl rotate-90 text-center py-4" : "text-9xl"
            }
          >
            {">"}
          </div>
          <div
            className={
              isMobile
                ? "w-full flex flex-col gap-3"
                : "w-1/3 flex flex-col gap-3"
            }
          >
            <div className="text-xl">src/controllers/</div>
            <Card content="User.controller.ts" />
            <Card content="Programmer.controller.ts" />
            <br />
            <div className="text-xl">src/types/</div>
            <Card content="User.ts" />
            <Card content="Programmer.ts" />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ filter: "blur(40px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen gap-20 dark:text-white flex flex-col items-center px-4 py-8"
      >
        <h2
          className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold tracking-tight text-center`}
        >
          Ready to build faster?
        </h2>
        <p
          className={`${isMobile ? "text-4xl" : "text-7xl"} text-gray-600 dark:text-[#FF4F00] max-w-xl text-center drop-shadow-2xl dark:drop-shadow-black`}
        >
          Hit the ground running — check out the docs!
        </p>
        <motion.a
          href="/docs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 px-6 py-3 ${isMobile ? "text-base" : "text-xl"} rounded-lg bg-black text-white drop-shadow-[#FF4F00] dark:text-white font-semibold drop-shadow-2xl transition`}
        >
          View Docs
        </motion.a>
      </motion.section>
    </main>
  );
}
