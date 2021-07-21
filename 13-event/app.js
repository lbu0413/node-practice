const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
	console.log("first callback -", args);
};

emitter.on("wook", callback1);

emitter.on("wook", (args) => {
	console.log("second callback -", args);
});

emitter.emit("wook", { message: 1 });
emitter.emit("wook", { message: 2 });
emitter.removeAllListeners();
emitter.emit("wook", { message: 3 });
