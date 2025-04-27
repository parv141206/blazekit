import React from "react";
export function CodeElement({ children }: { children: string }) {
  return (
    <span className="bg-[#FF4F00] rounded-sm w-fit text-black px-2 mx-1">
      {children}
    </span>
  );
}
export default function Code({
  code,
  fileName,
  smaller,
}: {
  code: string;
  fileName: string;
  smaller?: boolean;
}) {
  return (
    <div
      className={`bg-with-noise rounded-md min-w-80 flex flex-col drop-shadow-2xl w-fit drop-shadow-black dark:text-gray-400 text-[0.7rem] ${smaller ? "md:text-[0.9rem]" : "md:text-lg"}`}
    >
      <div className="flex items-center ">
        <div className="flex gap-1 m-3 absolute">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-3 h-3 bg-gray-800 rounded-full"></div>
          ))}
        </div>
        <div className="flex items-center text-sm justify-center w-full py-1 pt-1.5">
          {fileName}
        </div>
      </div>

      <hr className="text-gray-800" />
      <pre className="p-5">
        <code>{code}</code>
      </pre>
    </div>
  );
}
