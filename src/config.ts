import { cosmiconfigSync } from "cosmiconfig";
import { BlazeConfig } from "./types";
import { BColors } from "./constants";
import path from "path";
import fs from "fs";
/**
 * Loads the `.blazerc` configuration file synchronously from the project root.
 *
 * @remarks
 * This uses `cosmiconfigSync` to load a `.blazerc` JSON file that defines key options
 * for how and where BlazeKit will generate files in a Next.js project.
 *
 * The config must contain:
 * - `database`: Type of database (e.g., "mongo", "postgres")
 * - `databaseName`: Name of the database
 * - `typesOutputDir`: Output path for generated TypeScript types
 * - `controllersOutputDir`: Output path for generated controller files
 * - `apiRoutesOutputDir`: Output path for generated API routes
 *
 * @returns A `BlazeConfig` object containing all required configuration values.
 *
 * @throws Will throw an error with a helpful message if the config file is not found.
 */
export function loadConfigSync(): BlazeConfig {
  const c = new BColors();
  const explorer = cosmiconfigSync("blaze", {
    searchPlaces: [".blazerc"],
  });

  const result = explorer.search();

  if (!result) {
    const configMissingMessage =
      `
        ${c.FAIL} 
        ${c.BOLD} 
╭──────────────────────╮
│  HOLY SHIT AN ERROR  │
╰──────────────────────╯ 
        ${c.ENDC}
      ${c.WARNING}${c.BOLD}\n` +
      `No .blazerc file found in the project root.\n` +
      `BlazeKit requires a .blazerc configuration file to generate types, controllers, and API routes.\n\n` +
      `Please create a .blazerc file in the root of your project with the following structure:\n\n` +
      `${c.OKBLUE}` +
      `{\n` +
      `  "database": "mongo",\n` +
      `  "databaseName": "your_database_name",\n` +
      `  "typesOutputDir": "src/types",\n` +
      `  "controllersOutputDir": "src/controllers",\n` +
      `  "apiRoutesOutputDir": "src/app/api"\n` +
      `}\n` +
      `${c.ENDC}` +
      `\nFor more details, visit the docs: ${c.UNDERLINE}https://github.com/parv141206/blazekit${c.ENDC}\n`;

    const error = new Error(configMissingMessage);
    (error as any).stack = "";
    throw error;
  }

  return result.config as BlazeConfig;
}
/**
 * Creates a sample .blazerc file in the root folder of the Next.js project.
 * This function will be called when the CLI flag --create-config is passed.
 *
 * @remarks
 * The function writes a `.blazerc` file to the root directory containing default configurations for BlazeKit.
 */
export function createSampleConfig() {
  const c = new BColors();
  const configPath = path.resolve(process.cwd(), ".blazerc");

  if (fs.existsSync(configPath)) {
    console.log(
      c.FAIL +
        c.BOLD +
        `\n
╭──────────────────────╮
│  HOLY SHIT AN ERROR  │
╰──────────────────────╯\n` +
        c.ENDC +
        `The .blazerc file already exists in the root of your project.\n`,
    );
    return;
  }

  const sampleConfig = {
    database: "mongo",
    databaseName: "your_database_name",
    typesOutputDir: "src/types",
    controllersOutputDir: "src/controllers",
    apiRoutesOutputDir: "src/app/api",
  };

  fs.writeFileSync(configPath, JSON.stringify(sampleConfig, null, 2));

  console.log(
    c.OKGREEN +
      c.BOLD +
      `\n
╭──────────────────────╮
│  SUCCESS!            │
╰──────────────────────╯\n` +
      c.ENDC +
      `The .blazerc configuration file has been created in the root directory.\n` +
      `You can now customize it for your project!\n`,
  );
}
