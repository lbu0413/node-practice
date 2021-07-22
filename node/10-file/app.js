const fs = require("fs");

// 3
// rename(..., callback(err, data)) 비동기
// try { renameSync(...) } catch (e) { } 동기
// promise.rename().then().catch()

try {
	fs.renameSync("./text.txt", "./file-new.txt");
} catch (err) {
	console.log(err);
}

fs.rename("./text-new.txt", "./text.txt", (err) => {
	console.log(err);
});
console.log("hello");

fs.promises
	.rename("./text.txt", "./text-new.txt")
	.then(() => console.log("done!"))
	.catch(console.error);
