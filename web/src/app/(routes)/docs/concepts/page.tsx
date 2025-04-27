"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function Concepts() {
  return (
    <DocsContent>
      <DocsMainTitle>Concepts</DocsMainTitle>

      <DocsTitle>What's the Idea Behind BlazeKit?</DocsTitle>
      <p>
        BlazeKit was made to take the boring, repetitive work out of setting up
        your database types, controllers, and API routes — especially in Next.js
        projects.
      </p>
      <p>
        Instead of manually writing everything, you just define your models once
        in a simple schema file, and BlazeKit automatically generates the
        TypeScript types, controller logic, and even Next.js API routes for you.
      </p>

      <DocsTitle>Schema First Approach</DocsTitle>
      <p>
        You define your data structure using the BlazeKit schema format, which
        is easy and minimal. No bloated syntax — just clean model definitions.
      </p>
      <p>For example:</p>
      <Code
        code={`model User {
  name: string
  email: string
  age: number
}
`}
        fileName="schema.blaze"
      />

      <DocsTitle>Configuration Driven</DocsTitle>
      <p>
        BlazeKit is controlled by a simple JSON config file that lets you decide
        where to generate types, controllers, and API routes. It assumes a{" "}
        <code>src</code> directory structure (like most Next.js projects), but
        you can customize everything easily.
      </p>

      <DocsTitle>Opinionated but Flexible</DocsTitle>
      <p>
        BlazeKit follows some strong defaults (like TypeScript, Next.js API
        route structure), but you’re always free to tweak the config to fit your
        own project layout and needs.
      </p>

      <PreviousAndNext
        next={{
          title: "Schema Syntax",
          path: "/docs/concepts/schema-format",
        }}
      />
    </DocsContent>
  );
}
