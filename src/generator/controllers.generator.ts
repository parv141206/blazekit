/**
 * Contains functions regarding generating controllers.
 *
 * @author parv141206
 *
 */
import { BlazeModel } from "../types";
import { generateMongoController } from "./templates/mongo";
import fs from "fs";
import path from "path";

/**
 * Currently hardcoded to "mongo", but in future will be dynamically read from blaze.config.
 */
export const database = "mongo";

/**
 * Placeholder for the database name — should eventually come from blaze.config.
 */
export const databaseName = "temp";

/**
 * Generates the controller code for a given model based on the selected database.
 *
 * @param model - The BlazeModel object containing the model's name and fields.
 * @returns A string containing the full controller code for that model.
 *
 * @throws Will throw an error if the selected database is unsupported.
 *
 */
export function generateControllers(model: BlazeModel): string {
  let controllerCode = "";

  switch (database) {
    case "mongo":
      controllerCode = generateMongoController(model, databaseName);
      break;

    // I'll add others later
    default:
      throw new Error(`Unsupported database: ${database}`);
  }

  return controllerCode;
}

/**
 * Writes the generated controller code to a file
 *
 * @param typeName - The name of the model
 * @param content - The controller code string to be written to the file.
 *
 */
export function writeControllers(typeName: string, content: string): void {
  const dir = path.join("test", "controllers");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${typeName}.controller.ts`);
  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Wrote controller to ${filePath}`);
}
