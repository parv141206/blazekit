"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function RedisDocs() {
  return (
    <DocsContent>
      <DocsMainTitle>Redis Support</DocsMainTitle>

      <p>
        BlazeKit can automatically generate a Redis controller for your models.
        It uses simple key-based storage where each entry is stored as a JSON
        string under a unique key — no setup required beyond a running Redis
        instance.
      </p>

      <DocsTitle>What BlazeKit Generates</DocsTitle>
      <p>For each model, BlazeKit creates a Redis controller with:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>Redis Client Setup</strong> — A fully configured Redis client
          using <code>createClient</code> from the <code>redis</code> npm
          package.
        </li>
        <li>
          <strong>CRUD Functions</strong> — Key-based Create, Read, Update, and
          Delete operations with data serialized as JSON.
        </li>
        <li>
          <strong>UUID Support</strong> — Each object is automatically assigned
          a UUID when created.
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

      <p>BlazeKit will generate the following Redis controller:</p>

      <Code
        smaller={true}
        code={`// Redis Setup (auto-generated)
import { createClient } from "redis";
import { User } from "../types";
import { randomUUID } from "crypto";

const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

await redis.connect();

// CRUD Operations for User

export async function createUser(data: User) {
  const id = randomUUID();
  const key = "mydb:user:" + id;
  await redis.set(key, JSON.stringify({ ...data, id }));
  return { ...data, id };
}

export async function getAllUsers() {
  const keys = await redis.keys("mydb:user:*");
  const values = await Promise.all(keys.map((key) => redis.get(key)));
  return values.map((v) => v ? JSON.parse(v) : null).filter(Boolean);
}

export async function getUserById(id: string) {
  const key = "mydb:user:" + id;
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
}

export async function updateUser(id: string, data: Partial<User>) {
  const existing = await getUserById(id);
  if (!existing) return null;
  const updated = { ...existing, ...data };
  const key = "mydb:user:" + id;
  await redis.set(key, JSON.stringify(updated));
  return updated;
}

export async function deleteUser(id: string) {
  const key = "mydb:user:" + id;
  return redis.del(key);
}`}
        fileName="controllers/user.ts"
      />

      <DocsTitle>Notes</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          BlazeKit uses key patterns like <code>{`database:model:id`}</code>{" "}
          (e.g., <code>mydb:user:abc123</code>) to store each entry.
        </li>
        <li>
          Redis values are stored as JSON strings and deserialized on access.
        </li>
        <li>
          This setup uses Node’s native <code>crypto.randomUUID()</code> to
          generate unique IDs.
        </li>
        <li>
          This Redis integration is ideal for lightweight, fast-access use cases
          such as caching, queues, or quick prototyping.
        </li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "SQLite",
          path: "/docs/concepts/sqlite",
        }}
      />
    </DocsContent>
  );
}
