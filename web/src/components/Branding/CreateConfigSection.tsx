import React from "react";
import Code from "../Code";
import Blazekit from "./Blazekit";
import Step from "../Step";

export default function CreateConfigSection() {
  return (
    <div className="flex items-center justify-center flex-col dark:text-white gap-12 w-screen h-fit md:min-h-screen p-4">
      <div className="text-2xl md:text-3xl text-center">
        Create a configuration
      </div>
      <div className="flex w-full max-w-6xl flex-col md:flex-row justify-between gap-10">
        <div className="flex gap-7 flex-col flex-1">
          <div className="text-md md:text-xl">
            <Step step={1} /> Install <Blazekit /> by running
          </div>
          <Code code={`npm install blazekit`} fileName="bash" />
          <div className="text-md md:text-xl">
            <Step step={2} /> Now auto-generate a config using
          </div>
          <Code code={`npx blazekit --create-config`} fileName="bash" />
        </div>
        <div className="flex gap-7 flex-col flex-1">
          <div className="text-md md:text-xl">
            This creates a `.blazerc` config file.
          </div>
          <div className="md:scale-100 ">
            <Code
              code={`{
  "database": "prisma",
  "databaseName": "database_name",
  "typesOutputDir": "src/types",
  "controllersOutputDir": "src/controllers",
  "apiRoutesOutputDir": "src/app/api"
}`}
              fileName=".blazerc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
