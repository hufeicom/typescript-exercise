"use strict";
/// <reference path="node.d.ts" />
exports.__esModule = true;
var URL = require("url");
var myUrl = URL.parse("http://www.typescriptlang.org");
console.log(myUrl.pathname);
console.log(myUrl.hostname);
