#!/usr/bin/env node
import { readFileSync } from "fs";
import { parseBlazeSchema } from "./parser";
import { Visitor } from "./visitor";

const [, , filePath] = process.argv;

if (!filePath) {
  console.error("Usage: blazekit <file-path>");
  process.exit(1);
}

try {
  const input = readFileSync(filePath, "utf-8");

  const visitor = new Visitor();
  const cst = parseBlazeSchema(input);
  const ast = visitor.visit(cst);

  console.dir(ast, { depth: null });
} catch (err: any) {
  console.error(err.message);
  process.exit(1);
}
