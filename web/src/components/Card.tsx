import React from "react";

export default function Card({
  title,
  content,
}: {
  title?: string;
  content: string;
}) {
  return (
    <div className="bg-accent-with-noise rounded-md min-w-40 flex flex-col p-3 drop-shadow-2xl w-fit drop-shadow-black dark:text-gray-400">
      <div className="text-xl">{title}</div>
      <div className="text-md">{content}</div>
    </div>
  );
}
