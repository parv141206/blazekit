"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function PrismaDocs() {
  return (
    <DocsContent>
      <DocsMainTitle>Prisma Support</DocsMainTitle>

      <p>
        BlazeKit can generate a complete <strong>Prisma</strong> setup for your
        models, including the model definition for your{" "}
        <code>schema.prisma</code> file and a full CRUD controller using the
        Prisma Client.
      </p>

      <DocsTitle>What BlazeKit Generates</DocsTitle>
      <p>For each model, BlazeKit creates two things:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>Prisma Schema Model</strong> — A ready-to-paste Prisma model
          definition for <code>schema.prisma</code>.
        </li>
        <li>
          <strong>Prisma Controller</strong> — A CRUD controller using the
          Prisma Client.
        </li>
      </ul>

      <DocsTitle>Example Output</DocsTitle>
      <p>
        Suppose you have a model <code>User</code>:
      </p>

      <Code
        code={`model User {
  id     String @id
  name   String
  email  String @unique
  age    Int?
}`}
        fileName="schema.prisma"
      />

      <p>BlazeKit will also generate the following Prisma-based controller:</p>

      <Code
        code={`// Prisma Setup (auto-generated)
import { prisma } from "../lib/prisma";
import { User } from "../types/User";

// CRUD Operations for User

export async function createUser(data: User) {
  return prisma.user.create({ data });
}

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateUser(id: string, data: Partial<User>) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({ where: { id } });
}`}
        fileName="controllers/user.ts"
      />

      <DocsTitle>Notes</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          The generated Prisma schema needs to be manually pasted into your{" "}
          <code>schema.prisma</code> file.
        </li>
        <li>
          After updating the Prisma schema, don't forget to run{" "}
          <code>npx prisma generate</code> to update your client.
        </li>
        <li>
          BlazeKit assumes you have a <code>prisma</code> instance exported from{" "}
          <code>lib/prisma.ts</code> (you can customize this).
        </li>
        <li>
          Table (model) names are automatically lowercased in controller methods
          (e.g., <code>User</code> → <code>user</code>).
        </li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "Postgres",
          path: "/docs/concepts/postgres",
        }}
        next={{
          title: "SQLite",
          path: "/docs/concepts/sqlite",
        }}
      />
    </DocsContent>
  );
}
