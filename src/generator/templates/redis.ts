import { BlazeModel } from "../../types";

/**
 * Generates a complete Redis controller with basic CRUD using JSON serialization.
 * @remarks Assumes Redis stores model instances as JSON under keys like model:id
 */
export function generateRedisController(
  model: BlazeModel,
  databaseName: string,
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();
  const keyPrefix = `${databaseName}:${varName}`;

  return `
// ------------------------------
// Redis Setup (auto-generated)
// ------------------------------
import { createClient } from "redis";
import { ${modelName} } from "../types/${modelName}";
import { randomUUID } from "crypto";

const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

await redis.connect();

// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export async function create${modelName}(data: ${modelName}) {
  const id = randomUUID();
  const key = "${keyPrefix}:" + id;
  await redis.set(key, JSON.stringify({ ...data, id }));
  return { ...data, id };
}

export async function getAll${modelName}s() {
  const keys = await redis.keys("${keyPrefix}:*");
  const values = await Promise.all(keys.map((key) => redis.get(key)));
  return values.map((v) => v ? JSON.parse(v) : null).filter(Boolean);
}

export async function get${modelName}ById(id: string) {
  const key = "${keyPrefix}:" + id;
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
}

export async function update${modelName}(id: string, data: Partial<${modelName}>) {
  const existing = await get${modelName}ById(id);
  if (!existing) return null;
  const updated = { ...existing, ...data };
  const key = "${keyPrefix}:" + id;
  await redis.set(key, JSON.stringify(updated));
  return updated;
}

export async function delete${modelName}(id: string) {
  const key = "${keyPrefix}:" + id;
  return redis.del(key);
}
`;
}
