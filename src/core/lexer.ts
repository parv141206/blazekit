/*
 * Contains all the laxers
 * Not proud of the code structure in this but well, ill improve it someday
 * */

import { createToken, Lexer } from "chevrotain";

export const Model = createToken({ name: "Model", pattern: /model/ });
export const LCurly = createToken({ name: "LCurly", pattern: /{/ });
export const RCurly = createToken({ name: "RCurly", pattern: /}/ });
export const Colon = createToken({ name: "Colon", pattern: /:/ });
export const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});
export const Newline = createToken({
  name: "Newline",
  pattern: /\r?\n/,
  group: Lexer.SKIPPED,
});
export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /[ \t]+/,
  group: Lexer.SKIPPED,
});

// Following are the declarations for data types:

export const StringType = createToken({
  name: "StringType",
  pattern: /string/,
});
export const NumberType = createToken({
  name: "NumberType",
  pattern: /number/,
});
export const BooleanType = createToken({
  name: "BooleanType",
  pattern: /boolean/,
});

export const allTokens = [
  WhiteSpace,
  Newline,
  Model,
  LCurly,
  RCurly,
  Colon,
  // Data types
  StringType,
  NumberType,
  BooleanType,
  // This mofo always at end
  Identifier,
];
export const BlazeLexer = new Lexer(allTokens);
