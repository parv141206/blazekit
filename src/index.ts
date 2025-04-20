/**
 *
 * IGNORE THIS FILE, ITS FOR TESTING!!!
 *
 */

import { parseBlazeSchema } from "./parser";
import { Visitor } from "./visitor";

const input = `
model User {
  id: string
  email: string
}
`;
const visitor = new Visitor();
const cst = parseBlazeSchema(input);
const ast = visitor.visit(cst);
console.dir(ast, { depth: null });
