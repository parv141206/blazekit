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
 * Writes the provided content to a TypeScript file in the specified directory.
 *
 * @param typeName The name of the type file to be created.
 * @param content The TypeScript content to write into the file.
 * @param typesOutputDirectory The directory where the type file should be saved.
 */
export function writeTypes(
  typeName: string,
  content: string,
  typesOutputDirectory: string,
): void {
  const dir = path.resolve(typesOutputDirectory);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${typeName}.ts`);
  fs.writeFileSync(filePath, content, "utf8");

  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`\t\t-> Wrote types to ${relativePath}`);
}
