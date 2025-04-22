import { BColors } from "../constants";

export function logError() {
  const c = new BColors();

  console.log(
    c.FAIL +
      c.BOLD +
      `\n
╭──────────────────────╮
│  HOLY SHIT AN ERROR  │
╰──────────────────────╯\n` +
      c.ENDC,
  );
}
export function logGenerating() {
  const c = new BColors();
  console.log(
    c.OKGREEN +
      c.BOLD +
      `\n
╭──────────────────────╮
│  Generating!         │
╰──────────────────────╯\n` +
      c.ENDC,
  );
}
export function logSuccess() {
  const c = new BColors();
  console.log(
    c.OKGREEN +
      c.BOLD +
      `\n
╭──────────────────────╮
│  SUCCESS!            │
╰──────────────────────╯\n` +
      c.ENDC,
  );
}
