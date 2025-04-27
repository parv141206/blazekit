"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function SQLiteDocs() {
  return (
    <DocsContent>
      <DocsMainTitle>SQLite Support</DocsMainTitle>

      <p>
        BlazeKit can automatically generate a full SQLite controller for your
        models. This controller includes the database setup and all basic CRUD
        operations — ready to use out of the box!
      </p>

      <DocsTitle>What BlazeKit Generates</DocsTitle>
      <p>For each model, BlazeKit creates an SQLite controller with:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>SQLite Database Setup</strong> — A ready-to-use connection to
          your SQLite database.
        </li>
        <li>
          <strong>CRUD Functions</strong> — Create, Read, Update, and Delete
          operations for the model.
        </li>
      </ul>

      <DocsTitle>Example Output</DocsTitle>
      <p>
        Suppose you have a model <code>User</code>:
      </p>

      <Code
        code={`model User {
  name: string
  email: string
  age: number
}`}
        fileName="schema.blaze"
      />

      <p>BlazeKit will generate the following SQLite controller:</p>

      <Code
        smaller={true}
        code={`// SQLite Setup (auto-generated)
import db from "../lib/sqlite";
import { User } from "../types";

// CRUD Operations for User

export function createUser(data: User) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map(() => '?').join(', ');
  const stmt = db.prepare(\`INSERT INTO users (\${keys.join(", ")}) VALUES (\${placeholders})\`);
  const result = stmt.run(...values);
  return { id: result.lastInsertRowid, ...data };
}

export function getAllUsers() {
  const stmt = db.prepare("SELECT * FROM users");
  return stmt.all();
}

export function getUserById(id: number) {
  const stmt = db.prepare("SELECT * FROM users WHERE id = ?");
  return stmt.get(id);
}

export function updateUser(id: number, data: Partial<User>) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const setClause = keys.map(k => \`\${k} = ?\`).join(", ");
  const stmt = db.prepare(\`UPDATE users SET \${setClause} WHERE id = ?\`);
  stmt.run(...values, id);
  return getUserById(id);
}

export function deleteUser(id: number) {
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  stmt.run(id);
  return { id };
}`}
        fileName="controllers/user.ts"
      />

      <DocsTitle>Notes</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          BlazeKit assumes you have a `db` instance exported from{" "}
          <code>lib/sqlite.ts</code> (you can customize this).
        </li>
        <li>
          Each model’s table name is automatically pluralized based on the model
          name (e.g., <code>User</code> → <code>users</code>).
        </li>
        <li>
          This setup uses the `better-sqlite3` library for synchronous queries,
          which is ideal for small or local deployments.
        </li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "Prisma",
          path: "/docs/concepts/prisma",
        }}
      />
    </DocsContent>
  );
}
