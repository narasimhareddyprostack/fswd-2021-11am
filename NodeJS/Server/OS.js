const os = require("os");
console.log(os.freemem() / 10000000);
console.log(os.totalmem());

console.log(os.uptime());
console.log(os.arch());
console.log(os.cpus());
console.log(os.homedir());

console.log(os.hostname());

console.log(".............");
console.log(os.platform());
