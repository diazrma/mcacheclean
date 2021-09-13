// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const config = JSON.parse(fs.readFileSync("./config/base.json", "utf8"));

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("McacheClean está ativo");

  let disposable = vscode.commands.registerCommand(
    "mcacheclean.clearcache",
    async () => {
      const pathFolder = config.folders;

      const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

      pathFolder.forEach((path) => {
        const folders = vscode.Uri.file(wsPath + path);

        vscode.workspace.fs.delete(folders, { recursive: true });
        setTimeout(() => {
          try {
            vscode.workspace.fs.createDirectory(folders);
          } catch (error) {
            vscode.window.showInformationMessage(`Ocorreu um erro: ${erro}`);
          }
        }, 2000);

        vscode.window.showInformationMessage("Tudo Limpo por aqui!");
      });
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
