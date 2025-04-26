import React from "react";
import Code from "../Code";
import Step from "../Step";

export default function RunningCommandSection() {
  return (
    <div className="flex items-center relative justify-center flex-col dark:text-white gap-12 w-screen h-screen">
      <div className="text-3xl text-center">Lets compile it!</div>

      <div className="flex min-w-3/4 flex-col gap-7">
        <div className="text-xl">
          <Step step={4} /> We compile this schema using the following command
        </div>
        <Code code={`npx blazekit schema.blaze`} fileName="bash" />
        <div className="text-xl">And bam! Thats it!!!</div>
      </div>
    </div>
  );
}
