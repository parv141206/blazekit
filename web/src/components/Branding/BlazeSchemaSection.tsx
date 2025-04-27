import React from "react";
import Code from "../Code";
import Step from "../Step";

export default function BlazeSchemaSection() {
  return (
    <div className="flex items-center justify-center flex-col dark:text-white gap-12 w-screen h-fit md:h-screen md:p-0 p-4">
      <div className="text-3xl text-center">
        It all starts with <br /> a single schema.blaze
      </div>

      <div className="flex min-w-3/4 flex-col gap-7">
        <div className="text-xl">
          <Step step={3} /> Create all your models in a single schema.blaze file
        </div>
        <Code
          code={`model User {
  name: string
  email: string
  age: number
}`}
          fileName="schema.blaze"
        />
        <div className="text-xl">
          Normally you would create it in src/blaze/schema.blaze in a NextJS
          app.
        </div>
      </div>
    </div>
  );
}
