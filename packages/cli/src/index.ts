import { Command } from "commander";
import { initCommand } from "./commands/init";
import { addCommand } from "./commands/add";

const program = new Command();

program
  .name("rad-ui")
  .description(
    "CLI for adding Rad UI components to your project.\nBeautiful Persian-themed React components built on Radix UI and Tailwind CSS."
  )
  .version("0.1.0");

program
  .command("init")
  .description("Initialize Rad UI in your project")
  .option("-y, --yes", "Skip confirmation prompts and use defaults")
  .action(initCommand);

program
  .command("add")
  .description("Add components to your project")
  .argument("[components...]", "Components to add (space-separated)")
  .option("-a, --all", "Add all available components")
  .option("-o, --overwrite", "Overwrite existing components")
  .option("-p, --path <path>", "Custom path for components")
  .action(addCommand);

program.parse();
