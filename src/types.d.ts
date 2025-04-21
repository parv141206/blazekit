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
