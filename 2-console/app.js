console.log("...logging");
console.clear();

// log level
console.log("log"); //개발
console.info("info"); //정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert 참이 아닌 경우에만 출력
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "wook", age: 28 };
console.log(student);
console.table(student);
console.dir(student);
