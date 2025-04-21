/**
 *
 * IGNORE THIS FILE, ITS FOR TESTING!!!
 *
 */

import { generate } from "./generator/generator";
import { parseBlazeSchema } from "./core/parser";
import { Visitor } from "./core/visitor";

const input = `
model User {
  id: string
  email: string
  address: string
}
model Coder {
  id: string
  name: string
}
`;
const visitor = new Visitor();
const cst = parseBlazeSchema(input);
const ast = visitor.visit(cst);
generate(ast);
