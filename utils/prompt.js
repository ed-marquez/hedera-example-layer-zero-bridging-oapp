const readline = require("readline");

const waitForInput = async (message = "\nPress Enter to get the latest price for the next pair...") => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	await new Promise((resolve) =>
		rl.question(message, () => {
			rl.close();
			resolve();
		})
	);
};

module.exports = { waitForInput };
