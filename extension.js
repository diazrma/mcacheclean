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
    "mcacheclean.limparcache", async() => {

		const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath;  
		const dirVar = vscode.Uri.file(wsPath + '/var/');
		const dirGenerated = vscode.Uri.file(wsPath + '/generated/');
		
		vscode.workspace.fs.delete(dirVar,{recursive:true});
	

		vscode.workspace.fs.delete(dirGenerated,{recursive:true});
		
		vscode.workspace.fs.createDirectory(dirVar)
		
		vscode.workspace.fs.createDirectory(dirGenerated)
	
		vscode.window.showInformationMessage('Tudo Limpo por aqui!');
		
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
