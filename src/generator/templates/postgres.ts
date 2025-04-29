import { BlazeModel } from "../../types";

/**
 * Generates a complete PostgreSQL controller with full CRUD.
 * @remarks Assumes use of the `pg` package and a standard Next.js environment.
 */
export function generatePostgresController(
  model: BlazeModel,
  databaseUrlEnv: string = "POSTGRES_URL",
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();
  const tableName = `${varName}s`;

  return `
// ------------------------------
// PostgreSQL Setup (auto-generated)
// ------------------------------
import { Pool } from "pg";
import { ${modelName} } from "../types/${modelName}";

const pool = new Pool({
  connectionString: process.env.${databaseUrlEnv},
});

// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export async function create${modelName}(data: ${modelName}) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map((_, i) => \`$\${i + 1}\`).join(", ");
  const query = \`INSERT INTO ${tableName} (\${keys.join(", ")}) VALUES (\${placeholders}) RETURNING *\`;

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAll${modelName}s() {
  const result = await pool.query("SELECT * FROM ${tableName}");
  return result.rows;
}

export async function get${modelName}ById(id: string) {
  const result = await pool.query("SELECT * FROM ${tableName} WHERE id = $1", [id]);
  return result.rows[0];
}

export async function update${modelName}(id: string, data: Partial<${modelName}>) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const setClause = keys.map((key, i) => \`\${key} = $\${i + 1}\`).join(", ");
  const query = \`UPDATE ${tableName} SET \${setClause} WHERE id = $\${keys.length + 1} RETURNING *\`;

  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
}

export async function delete${modelName}(id: string) {
  const result = await pool.query("DELETE FROM ${tableName} WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
}
`;
}
