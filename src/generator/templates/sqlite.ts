import { BlazeModel } from "../../types";

/**
 * Generates a complete SQLite controller with full CRUD.
 * @remarks Uses better-sqlite3 (sync). Designed for local or small deployments.
 */
export function generateSQLiteController(
  model: BlazeModel,
  dbImportPath = "../lib/sqlite",
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();
  const tableName = `${varName}s`;

  return `
// ------------------------------
// SQLite Setup (auto-generated)
// ------------------------------
import db from "${dbImportPath}";
import { ${modelName} } from "../types/${modelName}";


// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export function create${modelName}(data: ${modelName}) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map(() => '?').join(', ');
  const stmt = db.prepare(\`INSERT INTO ${tableName} (\${keys.join(", ")}) VALUES (\${placeholders})\`);
  const result = stmt.run(...values);
  return { id: result.lastInsertRowid, ...data };
}

export function getAll${modelName}s() {
  const stmt = db.prepare("SELECT * FROM ${tableName}");
  return stmt.all();
}

export function get${modelName}ById(id: number) {
  const stmt = db.prepare("SELECT * FROM ${tableName} WHERE id = ?");
  return stmt.get(id);
}

export function update${modelName}(id: number, data: Partial<${modelName}>) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const setClause = keys.map(k => \`\${k} = ?\`).join(", ");
  const stmt = db.prepare(\`UPDATE ${tableName} SET \${setClause} WHERE id = ?\`);
  stmt.run(...values, id);
  return get${modelName}ById(id);
}

export function delete${modelName}(id: number) {
  const stmt = db.prepare("DELETE FROM ${tableName} WHERE id = ?");
  stmt.run(id);
  return { id };
}
`;
}
