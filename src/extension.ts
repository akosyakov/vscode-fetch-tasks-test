import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('fetch-tasks.helloWorld', async () => {
		const tasks = await vscode.tasks.fetchTasks();
		const channel = vscode.window.createOutputChannel('fetch-tasks');
		channel.clear();
		for (const task of tasks) {
			const { name, source } = task;
			channel.appendLine(JSON.stringify({ name, source }, undefined, 2));
		}
		channel.appendLine('' + tasks.length);
		channel.show();
	}));
}

export function deactivate() { }
