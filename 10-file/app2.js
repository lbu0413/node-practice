const fs = require("fs").promises;

// read a file
fs.readFile("./text-new.txt", "utf8")
	.then((data) => console.log(data))
	.catch(console.error);

// write a file
fs.writeFile("./file.txt", "Hello, Dream Coders!").catch(console.error);
fs.appendFile("./file.txt", "Yo, Dream Coders!")
	.then(() => {
		fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
	})
	.catch(console.error);

// folder
fs.mkdir("sub-folder").catch(console.error);
fs.readdir("./").then(console.log).catch(console.error);
