"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function TypesDocs() {
  return (
    <DocsContent>
      <DocsMainTitle>Types Generation</DocsMainTitle>

      <p>
        BlazeKit automatically generates TypeScript interfaces for each model in
        your schema, allowing you to work with strong typing and reducing
        boilerplate code. These types are created based on your schema
        definition and can be found in the directory you specify in the{" "}
        <code>typesOutputDir</code> configuration inside your{" "}
        <code>.blazerc</code> file.
      </p>

      <DocsTitle>What BlazeKit Generates</DocsTitle>
      <p>For each model defined in your schema, BlazeKit generates:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>TypeScript Interface</strong> — An interface for the model,
          using TypeScript’s syntax, which can be imported and used throughout
          your project.
        </li>
      </ul>

      <DocsTitle>Example Output</DocsTitle>
      <p>
        Suppose you have a schema model <code>User</code> in your{" "}
        <code>schema.blaze</code>
        file like this:
      </p>

      <Code
        code={`model User {
  name: string
  age: number
}`}
        fileName="schema.blaze"
      />

      <p>
        BlazeKit will automatically generate the following type for{" "}
        <code>User</code>:
      </p>

      <Code
        code={`// User.ts (auto-generated)
export interface User {
  name: string;
  age: number;
}`}
        fileName="src/types/User.ts"
      />

      <DocsTitle>How It Works</DocsTitle>
      <p>
        The types for each model are generated based on the schema you provide.
        The names of the generated files match the names of the models, and the
        contents of these files contain TypeScript interfaces that mirror the
        structure of your models.
      </p>

      <p>
        The output directory for the types is specified in your{" "}
        <code>.blazerc</code> file under the <code>typesOutputDir</code> field.
        By default, this points to the
        <code>src/types</code> folder.
      </p>

      <DocsTitle>Notes</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          The generated TypeScript interfaces are automatically placed in the
          directory specified by the <code>typesOutputDir</code> field in your{" "}
          <code>.blazerc</code> file.
        </li>
        <li>
          The file names of the generated types match the model names in the
          schema (e.g.,
          <code>User</code> → <code>User.ts</code>).
        </li>
        <li>
          The generated types are simple interfaces, reflecting the model
          definitions you provide, and can be easily used throughout your app to
          ensure strong typing.
        </li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "Schema Format",
          path: "/docs/concepts/schema-format",
        }}
        next={{
          title: "Supported Databases",
          path: "/docs/concepts/supported-databases",
        }}
      />
    </DocsContent>
  );
}
