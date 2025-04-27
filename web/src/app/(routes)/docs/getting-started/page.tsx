"use client";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function GettingStarted() {
  return (
    <DocsContent>
      <DocsMainTitle>Getting Started</DocsMainTitle>

      <DocsTitle>It's That Easy!</DocsTitle>
      <p>
        BlazeKit is designed to be super simple. You’ll be up and running in no
        time — we promise! Just follow the next few steps, and you're good to
        go.
      </p>

      <DocsTitle>Ready to Dive In?</DocsTitle>
      <p>
        Don’t worry, it’s not complicated. We’ve broken it down into 3 simple
        parts:
      </p>
      <ul className="list-disc pl-5">
        <li>Installation</li>
        <li>Quickstart</li>
        <li>Example Project</li>
      </ul>

      <PreviousAndNext
        next={{
          title: "Installation",
          path: "/docs/getting-started/installation",
        }}
      />
    </DocsContent>
  );
}
