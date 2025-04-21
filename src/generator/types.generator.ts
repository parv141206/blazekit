import { BlazeField } from "../types";
import fs from "fs";
import path from "path";

/**
 * @remarks obviously this currently works only for models.
 *
 * Generates a TypeScript interface definition string for a given model.
 *
 * @param typeName - The name of the model (e.g., "User")
 * @param fields - An array of field objects, each with a `name` and `type`
 * @returns A formatted TypeScript `interface` string
 *
 * */

export function generateTypes(typeName: string, fields: BlazeField[]) {
  const typeScriptInterface = `
export interface ${typeName} {
  ${fields.map((field: BlazeField) => `${field.name}: ${field.type};`).join("\n  ")}
}
`;
  return typeScriptInterface;
}

/**
 * Writes "types" string to a `.ts` file.
 * @param typeName - The name of the file/model (same thing for now)
 * @param content - The TypeScript interface string to write
 */
export function writeTypes(typeName: string, content: string): void {
  const dir = path.join("test", "types");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${typeName}.ts`);
  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Wrote types to ${filePath}`);
}
