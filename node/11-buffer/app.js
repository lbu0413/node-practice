// Fixed-size chunk of memory
// array of integers, byte of data

const fr = require("fs");
const buf = Buffer.from("Hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]); // ascii 72
console.log(buf[1]); // ascii 105
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
// const buf3 = Buffer.allocUnsafe(2); // faster but unsafer

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
// console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
