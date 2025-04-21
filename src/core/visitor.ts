/**
 *
 * Basic CST to AST
 */

import { CstNode } from "chevrotain";
import { parserInstance } from "./parser";

export class Visitor extends parserInstance.getBaseCstVisitorConstructor() {
  constructor() {
    super();
    this.validateVisitor();
  }

  schema(ctx: any) {
    return ctx.model.map((m: CstNode) => this.visit(m));
  }

  model(ctx: any) {
    const name = ctx.Identifier[0].image;
    const fields = ctx.field.map((f: CstNode) => this.visit(f));
    return { type: "Model", name, fields };
  }

  field(ctx: any) {
    const name = ctx.Identifier[0].image;

    let type = "";
    if (ctx.StringType) {
      type = ctx.StringType[0].image;
    } else if (ctx.NumberType) {
      type = ctx.NumberType[0].image;
    } else if (ctx.BooleanType) {
      type = ctx.BooleanType[0].image;
    } else {
      throw new Error("Unknown field type");
    }

    return { name, type };
  }
}
