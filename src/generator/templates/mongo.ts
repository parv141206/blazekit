import { BlazeModel } from "../../types";

/**
 * Generates a complete MongoDB controller with full CRUD and client setup.
 * @remarks No external dependencies are assumed, includes everything needed.
 */
export function generateMongoController(
  model: BlazeModel,
  databaseName: string,
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();

  return `
// ------------------------------
// MongoDB Setup (auto-generated)
// ------------------------------
import { MongoClient, ObjectId } from "mongodb";
import { ${modelName} } from "../types/${modelName}";


const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const databaseName = "${databaseName}";
const client = new MongoClient(uri);

async function getCollection() {
  if (!client.isConnected?.()) await client.connect();
  return client.db(databaseName).collection("${varName}s");
}

// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export async function create${modelName}(data: ${modelName}) {
  const collection = await getCollection();
  const result = await collection.insertOne(data);
  return result.ops?.[0] ?? data;
}

export async function getAll${modelName}s() {
  const collection = await getCollection();
  return collection.find({}).toArray();
}

export async function get${modelName}ById(id: string) {
  const collection = await getCollection();
  return collection.findOne({ _id: new ObjectId(id) });
}

export async function update${modelName}(id: string, data: Partial<${modelName}>) {
  const collection = await getCollection();
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
  return get${modelName}ById(id);
}

export async function delete${modelName}(id: string) {
  const collection = await getCollection();
  return collection.deleteOne({ _id: new ObjectId(id) });
}
`;
}
