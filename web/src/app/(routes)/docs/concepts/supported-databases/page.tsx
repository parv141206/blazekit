"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function SupportedDatabases() {
  return (
    <DocsContent>
      <DocsMainTitle>Supported Databases</DocsMainTitle>

      <p>
        BlazeKit is designed to be flexible — it lets you generate database
        controllers for multiple popular databases.
      </p>

      <DocsTitle>Currently Supported</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          <strong>MongoDB</strong> — Native support for document-based
          operations.
        </li>
        <li>
          <strong>PostgreSQL</strong> — SQL-based support for relational
          databases.
        </li>
        <li>
          <strong>SQLite</strong> — Lightweight file-based SQL database support.
        </li>
        <li>
          <strong>Firebase</strong> — Cloud-based NoSQL support for realtime
          apps.
        </li>
        <li>
          <strong>Prisma</strong> — Integration-ready support with Prisma ORM.
        </li>
      </ul>

      <DocsTitle>How to Specify Database</DocsTitle>
      <p>
        You select your database when creating your BlazeKit config. Example:
      </p>

      <Code
        code={`{
  "database": "prisma",
  "databaseName": "mydb",
  "typesOutputDir": "src/types",
  "controllersOutputDir": "src/controllers",
  "apiRoutesOutputDir": "src/app/api"
}`}
        fileName=".blazerc"
      />

      <DocsTitle>Want More?</DocsTitle>
      <p>
        Support for even more databases and advanced configurations is planned
        in future updates! Contributions and suggestions are always welcome 🙌
      </p>

      <PreviousAndNext
        previous={{ title: "Types", path: "/docs/concepts/types" }}
        next={{
          title: "MongoDB",
          path: "/docs/concepts/mongodb",
        }}
      />
    </DocsContent>
  );
}
