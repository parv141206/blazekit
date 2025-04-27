"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function Installation() {
  return (
    <DocsContent>
      <DocsMainTitle>Installation</DocsMainTitle>

      <DocsTitle>Simple Installation</DocsTitle>
      <p>
        Installing BlazeKit is a breeze! Just follow the steps below, and you’ll
        be ready to go in no time.
      </p>

      <DocsTitle>Install via npm</DocsTitle>
      <p>To get started, run the following command in your terminal:</p>

      <Code
        fileName="Installation Command"
        code="npm install your-package-name" // Replace with the actual package name
      />

      <DocsTitle>That's It!</DocsTitle>
      <p>
        Once installed, you’re all set to start using BlazeKit. It’s as simple
        as that!
      </p>

      <PreviousAndNext
        previous={{
          title: "Getting Started",
          path: "/docs/getting-started",
        }}
        next={{
          title: "Quickstart",
          path: "/docs/getting-started/quickstart",
        }}
      />
    </DocsContent>
  );
}
