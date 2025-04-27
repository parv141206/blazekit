"use client";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";
import Code, { CodeElement } from "@/components/Code";

export default function Quickstart() {
  return (
    <DocsContent>
      <DocsMainTitle>Quickstart</DocsMainTitle>

      <DocsTitle>Create Your Configuration</DocsTitle>
      <p>
        First, let’s get your project set up by creating a configuration file
        with BlazeKit. Running the command below will generate a default config
        file that you can easily customize.
      </p>

      <Code fileName=".blazerc" code="npx blazekit --create-config" />

      <DocsTitle>Understanding the Configuration</DocsTitle>
      <p>
        Here’s an overview of the BlazeKit config file, which will look like
        this:
      </p>

      <Code
        fileName="blazekit.config.json"
        code={JSON.stringify(
          {
            database: "prisma",
            databaseName: "database_name",
            typesOutputDir: "src/types",
            controllersOutputDir: "src/controllers",
            apiRoutesOutputDir: "src/app/api",
          },
          null,
          2,
        )}
      />

      <DocsTitle>Config Elements Breakdown</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          <CodeElement>database</CodeElement> Specifies the database you want to
          use (e.g., "prisma").
        </li>
        <li>
          <CodeElement>databaseName</CodeElement> Your database name.
        </li>
        <li>
          <CodeElement>typesOutputDir</CodeElement> Directory where your
          TypeScript types will be generated.
        </li>
        <li>
          <CodeElement>controllersOutputDir</CodeElement> Directory where your
          database controller files will be placed.
        </li>
        <li>
          <CodeElement>apiRoutesOutputDir</CodeElement> Directory for your API
          routes.
        </li>
      </ul>

      <DocsTitle>Create Your Schema</DocsTitle>
      <p>
        Next, you’ll want to create a <code>schema.blaze</code> file, which
        defines your data models and their structure. Here’s an example of a
        simple schema:
      </p>

      <Code
        fileName="schema.blaze"
        code={`model User {
  name: string;
  email: string;
  age: number;
}`}
      />
      <DocsTitle>Compile Your Schema</DocsTitle>
      <p>
        Once you’ve created your <code>schema.blaze</code> file, you can compile
        it using the following command:
      </p>

      <Code fileName="bash" code="npx blazekit schema.blaze" />

      <p>
        This command will compile your <code>schema.blaze</code> file and
        generate the necessary TypeScript types and controller files based on
        your defined models. The output will be placed in the directories
        specified in your
        <code>blazekit.config.json</code> file.
      </p>
      <DocsTitle>That’s It!</DocsTitle>
      <p>
        Once you’ve created the config and schema, you’re ready to generate your
        controllers and types, and BlazeKit will handle the rest. You’ll have a
        fully functional setup in no time.
      </p>

      <PreviousAndNext
        previous={{
          title: "Installation",
          path: "/docs/getting-started/installation",
        }}
      />
    </DocsContent>
  );
}
