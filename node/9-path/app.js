const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));

// normalize
console.log(path.normalize("./folder/////////sub"));

// join
console.log(__dirname + "/" + "image");
console.log(path.join(__dirname, "image"));
