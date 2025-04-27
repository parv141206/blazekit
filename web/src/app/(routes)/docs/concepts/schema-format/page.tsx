"use client";
import Code, { CodeElement } from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function SchemaFormat() {
  return (
    <DocsContent>
      <DocsMainTitle>Schema Format</DocsMainTitle>

      <DocsTitle>Simple and Clean</DocsTitle>
      <p>
        BlazeKit uses a super simple format for defining your models. If you've
        used Prisma or Drizzle before, it will feel very familiar — but even
        lighter.
      </p>

      <DocsTitle>Defining a Model</DocsTitle>
      <p>
        A model starts with the keyword <CodeElement>model</CodeElement>{" "}
        followed by the model name and a block that defines its fields.
      </p>

      <Code
        fileName="schema.blaze"
        code={`model User {
  name: string
  email: string
  age: number
}`}
      ></Code>

      <p>Each field inside the model has two parts:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>Field Name</strong> — the name of the property (e.g.,{" "}
          <CodeElement>name</CodeElement>).
        </li>
        <li>
          <strong>Type</strong> — the data type of the property (e.g.,{" "}
          <CodeElement>string</CodeElement> or <CodeElement>number</CodeElement>
          ).
        </li>
      </ul>

      <DocsTitle>Supported Types</DocsTitle>
      <p>BlazeKit currently supports the following types:</p>
      <ul className="list-disc pl-5">
        <li>
          <CodeElement>string</CodeElement>
        </li>
        <li>
          <CodeElement>number</CodeElement>
        </li>
        <li>
          <CodeElement>boolean</CodeElement>
        </li>
        <li>
          <CodeElement>date</CodeElement> (for Date objects)
        </li>
        <li>
          <CodeElement>object</CodeElement> (for nested structures)
        </li>
        <li>
          <CodeElement>array</CodeElement> (for arrays of values)
        </li>
      </ul>
      <DocsTitle>Example with Multiple Models</DocsTitle>
      <Code
        code={`model User {
  name: string
  email: string
}

model Post {
  title: string
  content: string
  published: boolean
}`}
        fileName="schema.blaze"
      />

      <DocsTitle>Quick Rules</DocsTitle>
      <ul className="list-disc pl-5">
        <li>Model names should start with an uppercase letter.</li>
        <li>Field names should be camelCase.</li>
        <li>No semicolons, commas, or extra symbols needed.</li>
        <li>One type per field — no unions or optionals yet.</li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "Concepts",
          path: "/docs/concepts",
        }}
        next={{ title: "Types", path: "/docs/concepts/types" }}
      />
    </DocsContent>
  );
}
