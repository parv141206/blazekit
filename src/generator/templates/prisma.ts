import { BlazeModel } from "../../types";

/**
 * Generates a Prisma model definition for `schema.prisma`.
 */
export function generatePrismaSchema(model: BlazeModel): string {
  const lines = [`model ${model.name} {`];

  for (const field of model.fields) {
    let line = `  ${field.name} ${field.type}`;

    if (field.optional) line += "?";
    if (field.isId) line += " @id";
    if (field.isUnique) line += " @unique";
    if (field.default) line += ` @default(${field.default})`;

    lines.push(line);
  }

  lines.push("}");
  return lines.join("\n");
}

/**
 * Generates a Prisma-based controller for full CRUD.
 * @remarks Assumes prisma client is initialized and model exists in schema.prisma
 */
export function generatePrismaController(
  model: BlazeModel,
  prismaImportPath = "../lib/prisma",
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();
  const pluralName = varName + "s";

  return `
// ------------------------------
// Prisma Setup (auto-generated)
// ------------------------------
import { prisma } from "${prismaImportPath}";
import { ${modelName} } from "../types/${modelName}";

// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export async function create${modelName}(data: ${modelName}) {
  return prisma.${varName}.create({ data });
}

export async function getAll${modelName}s() {
  return prisma.${varName}.findMany();
}

export async function get${modelName}ById(id: string) {
  return prisma.${varName}.findUnique({ where: { id } });
}

export async function update${modelName}(id: string, data: Partial<${modelName}>) {
  return prisma.${varName}.update({
    where: { id },
    data,
  });
}

export async function delete${modelName}(id: string) {
  return prisma.${varName}.delete({ where: { id } });
}
`;
}
