/*
 * This file, as the name suggests, contains the main parser, and a function to parse the syntax to a CST.
 * */

import { CstNode, CstParser } from "chevrotain";
import {
  allTokens,
  BlazeLexer,
  BooleanType,
  Colon,
  Identifier,
  LCurly,
  Model,
  NumberType,
  RCurly,
  StringType,
} from "./lexer";
import { BColors } from "./constants";

// TODO: Make this more structured, its an eyesore
class BlazeParser extends CstParser {
  constructor() {
    super(allTokens);
    this.performSelfAnalysis();
  }

  public schema = this.RULE("schema", () => {
    this.MANY(() => this.SUBRULE(this.model));
  });

  private model = this.RULE("model", () => {
    this.CONSUME(Model);
    this.CONSUME(Identifier);
    this.CONSUME(LCurly);
    this.MANY(() => this.SUBRULE(this.field));
    this.CONSUME(RCurly);
  });

  private field = this.RULE("field", () => {
    this.CONSUME(Identifier);
    this.CONSUME(Colon);
    this.OR([
      { ALT: () => this.CONSUME(StringType) },
      { ALT: () => this.CONSUME(NumberType) },
      { ALT: () => this.CONSUME(BooleanType) },
    ]);
  });
}

export const parserInstance = new BlazeParser();

export function parseBlazeSchema(text: string): CstNode {
  const lexingResult = BlazeLexer.tokenize(text);

  if (lexingResult.errors.length > 0) {
    throw new Error(
      "Lexing error:\n" + lexingResult.errors.map((e) => e.message).join("\n"),
    );
  }

  parserInstance.input = lexingResult.tokens;
  const cst = parserInstance.schema();

  if (parserInstance.errors.length > 0) {
    const err = parserInstance.errors[0];
    const token = err.token;
    const c = new BColors();
    // TODO: remove anger
    console.log(
      c.FAIL +
        c.BOLD +
        `\n
╭──────────────────────╮
│  HOLY SHIT AN ERROR  │
╰──────────────────────╯\n` +
        c.ENDC,
    );

    if (token) {
      const friendlyMessage =
        `${c.FAIL}${c.BOLD}` +
        `\n----------------------------------------\n` +
        `Parse error at line ${token.startLine}, column ${token.startColumn}:\n` +
        `Unexpected token '${token.image}' (found at ${token.startLine}:${token.startColumn}).\n` +
        `----------------------------------------\n` +
        c.ENDC;

      throw new Error(friendlyMessage);
    } else {
      throw new Error(
        c.FAIL +
          c.BOLD +
          "\nParsing failed with no specific token identified. How tf did u screw up\n" +
          c.ENDC,
      );
    }
  }
  return cst;
}
