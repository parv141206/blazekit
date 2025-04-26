import React from "react";
import Code from "../Code";

export default function BlazeSchemaSection() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Code
        code={`model User {
  name: string
  email: string
  age: number
}`}
        fileName="schema.blaze"
      />
    </div>
  );
}
