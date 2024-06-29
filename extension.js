// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed


function getWorkspaceRoot() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders && workspaceFolders.length > 0) {
        return workspaceFolders[0].uri.fsPath;
    }
    return undefined;
}

function getEditorInFocusUri() {
	return vscode.window.activeTextEditor.document.uri.fsPath;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rails-open-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('rails-open-test.openTest', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage("Project root: " + getWorkspaceRoot());
		vscode.window.showInformationMessage("Current file location: " + getEditorInFocusUri());

		/**
		 * Rails conventions:
		 * ROOT/app -> ROOT/test
		 * ROOT/lib -> ROOT/test/lib
		 */
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
