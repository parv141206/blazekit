"use client";
import Code from "@/components/Code";
import DocsContent, {
  DocsMainTitle,
  DocsTitle,
  PreviousAndNext,
} from "@/components/Docs/DocsContent";
import React from "react";

export default function MongoDBDocs() {
  return (
    <DocsContent>
      <DocsMainTitle>MongoDB Support</DocsMainTitle>

      <p>
        BlazeKit can automatically generate a full MongoDB controller for your
        models. This controller includes connection setup and all basic CRUD
        operations — ready to use out of the box!
      </p>

      <DocsTitle>What BlazeKit Generates</DocsTitle>
      <p>For each model, BlazeKit creates a MongoDB controller with:</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>MongoDB Client Setup</strong> — A ready-to-use connection to
          your database.
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

      <p>BlazeKit will generate the following MongoDB controller:</p>

      <Code
        code={`// MongoDB Setup (auto-generated)
import { MongoClient, ObjectId } from "mongodb";
import { User } from "../types";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const databaseName = "your_database_name";
const client = new MongoClient(uri);

async function getCollection() {
  if (!client.isConnected?.()) await client.connect();
  return client.db(databaseName).collection("users");
}

// CRUD Operations for User

export async function createUser(data: User) {
  const collection = await getCollection();
  const result = await collection.insertOne(data);
  return result.ops?.[0] ?? data;
}

export async function getAllUsers() {
  const collection = await getCollection();
  return collection.find({}).toArray();
}

export async function getUserById(id: string) {
  const collection = await getCollection();
  return collection.findOne({ _id: new ObjectId(id) });
}

export async function updateUser(id: string, data: Partial<User>) {
  const collection = await getCollection();
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
  return getUserById(id);
}

export async function deleteUser(id: string) {
  const collection = await getCollection();
  return collection.deleteOne({ _id: new ObjectId(id) });
}`}
        fileName="controllers/user.ts"
      />

      <DocsTitle>Notes</DocsTitle>
      <ul className="list-disc pl-5">
        <li>
          The MongoDB URI is read from <code>process.env.MONGO_URI</code>. If
          not available, it defaults to <code>mongodb://localhost:27017</code>.
        </li>
        <li>
          Each model’s collection name is the model name in lowercase with an
          "s" added (e.g., <code>User</code> → <code>users</code>).
        </li>
      </ul>

      <PreviousAndNext
        previous={{
          title: "Supported Databases",
          path: "/docs/concepts/supported-databases",
        }}
        next={{
          title: "Firebase",
          path: "/docs/concepts/firebase",
        }}
      />
    </DocsContent>
  );
}
