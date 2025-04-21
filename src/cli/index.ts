#!/usr/bin/env node
import { readFileSync } from "fs";
import { parseBlazeSchema } from "../core/parser";
import { Visitor } from "../core/visitor";
import { generate } from "../generator/generator";

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
  generate(ast);
} catch (err: any) {
  console.error(err.message);
  process.exit(1);
}
