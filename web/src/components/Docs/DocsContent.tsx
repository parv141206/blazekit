"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export function DocsMainTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-5xl font-bold text-[#FF4F00]">{children}</h1>;
}
export function DocsTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-bold text-white">{children}</h1>;
}
export function DocsSubtitle({ children }: { children: ReactNode }) {
  return <h1 className="text-xl font-bold text-white">{children}</h1>;
}
export function PreviousAndNextCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-with-noise border border-orange-950 rounded-md min-w-40 flex flex-col p-3 drop-shadow-2xl w-fit drop-shadow-black dark:text-gray-400">
      <div className="text-xl">{title}</div>
      <div className="text-md">{content}</div>
    </div>
  );
}

export function PreviousAndNext({
  previous,
  next,
}: {
  previous?: {
    title: string;
    path: string;
  };
  next?: {
    title: string;
    path: string;
  };
}) {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex p-10 justify-between gap-5">
      {previous ? (
        <Link href={previous.path} onClick={handleScrollToTop}>
          <PreviousAndNextCard title="Previous" content={previous.title} />
        </Link>
      ) : null}
      {next ? (
        <Link href={next.path} onClick={handleScrollToTop}>
          <PreviousAndNextCard title="Next" content={next.title} />
        </Link>
      ) : null}
    </div>
  );
}
export default function DocsContent({
  children,
  className = "flex flex-col gap-7 text-gray-400",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      //exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.section>
  );
}
