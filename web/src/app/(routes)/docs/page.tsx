"use client";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function Docs() {
  return (
    <DocsContent>
      <DocsMainTitle>Welcome to BlazeKit Docs</DocsMainTitle>

      <DocsTitle>Introduction</DocsTitle>
      <p>
        BlazeKit is specifically designed to integrate seamlessly with Next.js
        projects. It assumes you are using TypeScript and the `src` directory
        structure (though using the `src` directory is optional, and you can
        change this in your config file).
      </p>

      <DocsTitle>What Is BlazeKit?</DocsTitle>
      <p>
        BlazeKit is a powerful tool for Next.js developers that streamlines
        database integration and project setup by generating TypeScript types,
        database controllers, and API routes. With BlazeKit, you can quickly
        create and manage your database models, making your development process
        faster and more efficient.
      </p>

      <DocsTitle>Key Features</DocsTitle>
      <ul className="list-disc pl-5">
        <li>Automatic TypeScript types generation based on your schema</li>
        <li>Database controller creation for easy CRUD operations</li>
        <li>Supports Prisma and other databases via configuration</li>
        <li>Effortless integration into your Next.js project structure</li>
      </ul>

      <DocsTitle>Getting Started</DocsTitle>
      <p>
        BlazeKit makes it easy to get started with just a few commands. Follow
        the steps in the <a href="/docs/getting-started">Getting Started</a>{" "}
        section to set up your project and create your configuration.
      </p>

      <PreviousAndNext
        next={{
          title: "Getting Started",
          path: "/docs/getting-started",
        }}
      />
    </DocsContent>
  );
}
