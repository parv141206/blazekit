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
import { generatePostgresController } from "./templates/postgres";
import { generateFirebaseClientController } from "./templates/firebase";
import { generateSQLiteController } from "./templates/sqlite";
import {
  generatePrismaController,
  generatePrismaSchema,
} from "./templates/prisma";

/**
 * Generates the controller code for a given model based on the selected database.
 *
 * @param model - The BlazeModel object containing the model's name and fields.
 * @param database - The database (such as mongo)
 * @param databaseName - The database name
 *
 * @returns A string containing the full controller code for that model.
 *
 * @throws Will throw an error if the selected database is unsupported.
 */
export function generateControllers(
  model: BlazeModel,
  database: string,
  databaseName: string,
): string {
  let controllerCode = "";

  switch (database) {
    case "mongo":
      controllerCode = generateMongoController(model, databaseName);
      break;
    case "postgres":
      controllerCode = generatePostgresController(model);
      break;
    case "firebase":
      controllerCode = generateFirebaseClientController(model);
      break;
    case "sqlite":
      controllerCode = generateSQLiteController(model);
      break;
    case "prisma":
      controllerCode = generatePrismaController(model);

      const schemaCode = generatePrismaSchema(model);
      const schemaFilePath = path.resolve("src/prisma/schema.prisma");

      if (!fs.existsSync(path.dirname(schemaFilePath))) {
        fs.mkdirSync(path.dirname(schemaFilePath), { recursive: true });
      }

      fs.appendFileSync(schemaFilePath, schemaCode + "\n\n");
      console.log(`\t\t-> Appended Prisma schema to src/prisma/schema.prisma`);

      break;

    default:
      throw new Error(`Unsupported database: ${database}`);
  }

  return controllerCode;
}

/**
 * Writes the generated controller code to a file.
 *
 * @param typeName The name of the model (used for the controller file name).
 * @param content The controller code to be written to the file.
 * @param controllersOutputDirectory The directory where the controller file should be saved.
 */
export function writeControllers(
  typeName: string,
  content: string,
  controllersOutputDirectory: string,
): void {
  const dir = path.resolve(controllersOutputDirectory);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${typeName}.controller.ts`);
  fs.writeFileSync(filePath, content, "utf8");

  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`\t\t-> Wrote controller to ${relativePath}`);
}
