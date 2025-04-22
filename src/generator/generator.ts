/**
 *
 * This function is basically a wrapper to the other 2 functions. and thus, it calls controllerGen and typesGen and manages it all.
 * TODO: Currently i have only made it for "model", if i make anything else though, ill add it here.
 *
 * @author parv141206
 */
import { logGenerating } from "../cli/messages";
import { BColors } from "../constants";
import { ASTNode, BlazeConfig, BlazeModel } from "../types";
import { generateControllers, writeControllers } from "./controllers.generator";
import { generateTypes, writeTypes } from "./types.generator";

export function generate(ast: ASTNode, blazeConfig: BlazeConfig) {
  const c = new BColors();
  logGenerating();

  // Looping through each model (only model for now)
  ast.forEach((model: BlazeModel) => {
    // For now, this condition is always true, but well, I am still adding it
    if (model.type === "Model") {
      console.log(
        "\n" + c.OKGREEN + c.UNDERLINE + `[model] ${model.name}` + c.ENDC,
      );

      // TYPES
      //console.log("\t" + `  ${c.OKCYAN}Types${c.ENDC}`);
      const types = generateTypes(model.name, model.fields);
      writeTypes(model.name, types, blazeConfig.typesOutputDir);

      // CONTROLLERS
      //console.log("\t" + `  ${c.OKCYAN}Controllers${c.ENDC}`);
      const controllers = generateControllers(
        model,
        blazeConfig.database,
        blazeConfig.databaseName,
      );
      writeControllers(
        model.name,
        controllers,
        blazeConfig.controllersOutputDir,
      );
    }
  });

  console.log(c.OKGREEN + "\nGeneration Completed!\n" + c.ENDC);
}
