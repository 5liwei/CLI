#!/usr/bin/env node

const lib = require("liwei_firstcli_lib");
// console.log(lib.sum(1, 2));

// console.log("test11");

//注册一个命令   lw-test init

const { argv } = require("process");
// console.log(require("process"));

const command = argv[2];

const options = argv.slice(3);
console.log(options);

const [option, param] = options;
console.log(option, param);
if (lib[command]) {
  lib[command]();
} else {
  console.log("请输入命令");
}

console.log(argv[2]);

// 实现参数解析 --version 和 init --name
