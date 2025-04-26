import React from "react";
import Code from "../Code";
import Blazekit from "./Blazekit";
import Step from "../Step";

export default function CreateConfigSection() {
  return (
    <div className="flex items-center justify-center flex-col dark:text-white gap-12 w-screen h-screen">
      <div className="text-3xl">Create a configuration</div>
      <div className="flex min-w-3/4 justify-between">
        <div className="flex gap-7 flex-col ">
          <div className="text-xl">
            <Step step={1} /> Install <Blazekit /> by running
          </div>
          <Code code={`npm install blazekit`} fileName="bash" />
          <div className="text-xl">
            <Step step={2} /> Now auto-generate a config using
          </div>
          <Code code={`npx blazekit --create-config`} fileName="bash" />
        </div>
        <div className="flex gap-5 flex-col ">
          <div className="text-xl">This creates a .blazerc config file.</div>

          <Code
            code={`{
  "database": "prisma",
  "databaseName": "your_database_name",
  "typesOutputDir": "src/types",
  "controllersOutputDir": "src/controllers",
  "apiRoutesOutputDir": "src/app/api"
}`}
            fileName=".blazerc"
          />
        </div>
      </div>
    </div>
  );
}
