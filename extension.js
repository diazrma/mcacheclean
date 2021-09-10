// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  console.log("McacheClean está ativo");

  let disposable = vscode.commands.registerCommand(
    "mcacheclean.limparcache",
    function () {
      const rmGenerated = () => {
        fs.rmdirSync(path.join(__dirname, "generated"), { recursive: true });
        rmVar();
      };

      const rmVar = () => {
        fs.rmdirSync(path.join(__dirname, "var"), { recursive: true });
        createFolders();
      };

      const createFolders = () => {
        fs.mkdir(path.join(__dirname, "var"), (err) => {
			
		});

        fs.mkdir(path.join(__dirname, "generated"), (err) => {});
        vscode.window.showInformationMessage("Tudo limpo por aqui!");
      };
      rmGenerated();
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
