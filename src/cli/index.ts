#!/usr/bin/env node
import { readFileSync } from "fs";
import { parseBlazeSchema } from "../core/parser";
import { Visitor } from "../core/visitor";
import { generate } from "../generator/generator";
import { loadConfigSync } from "../config";
import { createSampleConfig } from "../config";

/**
 * Command-line interface (CLI) handler for BlazeKit.
 * This script processes CLI arguments, handles configuration loading,
 * and runs the schema parsing and generation steps.
 *
 * Usage:
 *   - Run `blazekit <file-path>` to process the given Blaze schema file.
 *   - Run `blazekit --create-config` to generate a sample .blazerc configuration file.
 */

// Capture all arguments passed to the script (skipping the first two: node binary and script path)
const [, , ...args] = process.argv;

/**
 * Handle CLI arguments such as flags and options.
 * If the `--create-config` flag is provided, this will generate the .blazerc file.
 */
function handleCLIArgs() {
  if (args.includes("--create-config")) {
    createSampleConfig();
    process.exit(0);
  }
}

handleCLIArgs();

let blazeConfig;

/**
 * Attempt to load the configuration synchronously.
 * The configuration file (.blazerc) is required for generation.
 *
 * @throws Will throw an error if the configuration file cannot be loaded.
 */
try {
  blazeConfig = loadConfigSync();
} catch (err: any) {
  console.error("Error loading the configuration:", err.message);
  process.exit(1);
}

/**
 * The first argument is expected to be the path to the Blaze schema file.
 * If not provided, an error message is shown with the correct usage.
 */
const filePath = args[0];

if (!filePath) {
  console.error("Usage: blazekit <file-path>");
  process.exit(1);
}

/**
 * Process the provided schema file and generate output based on it.
 *
 * - Read the file content
 * - Parse the Blaze schema into a CST (Concrete Syntax Tree)
 * - Visit the CST to generate an AST (Abstract Syntax Tree)
 * - Generate necessary files based on the AST and configuration
 *
 * @param filePath The path to the Blaze schema file to process.
 * @throws Will throw an error if there are issues reading the file or processing the schema.
 */

try {
  // Read the Blaze schema file from the provided path
  const input = readFileSync(filePath, "utf-8");

  // Parse the schema file into a Concrete Syntax Tree (CST)
  const visitor = new Visitor();
  const cst = parseBlazeSchema(input);

  // Visit the CST to generate the Abstract Syntax Tree (AST)
  const ast = visitor.visit(cst);

  // Generate the necessary files (types, controllers, API routes) based on the AST and config
  generate(ast, blazeConfig);
} catch (err: any) {
  console.error(err.message); // Output error message if there is an issue with file reading or processing
  process.exit(1); // Exit if an error occurs during file processing or generation
}
