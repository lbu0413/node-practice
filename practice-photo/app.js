const path = require("path");
const os = require("os");
const fs = require("fs");
const process = require("process");

// 1. 사용자가 원하는 폴더의 이름을 받아온다

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Downloads", folder);
if (!folder || !fs.existsSync(workingDir)) {
	console.log("please enter a folder name");
	return;
}

// 2. 그 안에 video, duplicated, captured 폴더를 만든다.
const video = path.join(workingDir, "video");
const captured = path.join(workingDir, "captured");
const duplicated = path.join(workingDir, "duplicated");

!fs.existsSync(video) && fs.mkdirSync(video);
!fs.existsSync(captured) && fs.mkdirSync(captured);
!fs.existsSync(duplicated) && fs.mkdirSync(duplicated);

// 3. 폴더안의 파일을 다 돌면서 해당 파일들을 적합한 폴더에 이동시킨다.
fs.promises
	.readdir(workingDir) //
	.then(processFiles)
	.catch(console.log); //

function processFiles(files) {
	files.forEach((file) => {
		if (isVideo(file)) {
			move(file, video);
		} else if (isCaptured(file)) {
			move(file, captured);
		} else if (isDuplicated(files, file)) {
			move(file, duplicated);
		}
	});
}

function isVideo(file) {
	const RegEx = /(mp4|mov)$/gm;
	const match = file.match(RegEx);
	return !!match;
}

function isCaptured(file) {
	const RegEx = /(png|aae)$/gm;
	const match = file.match(RegEx);
	return !!match;
}

function isDuplicated(files, file) {
	if (!file.startsWith("IMG") || file.startsWith("IMG_E")) {
		return false;
	}
	const edited = `IMG_E${file.split("_")[1]}`;
	const found = files.find((f) => f.includes(edited));
	return !!found;
}

function move(file, targetDir) {
	console.log(`move ${file} to ${path.basename(targetDir)}`);
	const oldPath = path.join(workingDir, file);
	const newPath = path.join(targetDir, file);
	fs.promises.rename(oldPath, newPath).catch(console.log);
}
