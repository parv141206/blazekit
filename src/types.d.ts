export interface BlazeField {
  name: string;
  type: string;
}

export interface BlazeModel {
  type: "Model";
  name: string;
  fields: BlazeField[];
}

export type ASTNode = BlazeModel[];

/**
 * Represents the structure of the Blaze configuration file.
 */
export interface BlazeConfig {
  /**
   * The type of database to use (e.g., "mongo", "postgres", etc.).
   */
  database: "mongo" | "postgres" | string;

  /**
   * The name of the database to generate code for.
   */
  databaseName: string;

  /**
   * Directory path where the generator will create TypeScript type definitions.
   */
  typesOutputDir: string;

  /**
   * Directory path where the generator will create controller files.
   */
  controllersOutputDir: string;

  /**
   * Directory path where the generator will create Next.js API route files.
   */
  apiRoutesOutputDir: string;
}
