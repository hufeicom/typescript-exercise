var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echo(arg) { console.log(arg); var b = arg; return b; }
// let myecho: <T>(arg: T) => T = echo;
console.log(echo(1));
var myecho = echo;
console.log(myecho(1));
var Program = /** @class */ (function () {
    function Program() {
        this.typeName = 'program';
    }
    Program.prototype.run = function () {
        console.log("I am program, and I can run. \n My type name is " + this.typeName);
    };
    return Program;
}());
var TS = /** @class */ (function (_super) {
    __extends(TS, _super);
    // private subname: string = 'good'
    function TS(n) {
        var _this = _super.call(this) || this;
        _this.sayHi = function (str) {
            console.log("I can run, and I'm TS. and you " + str);
            _this.run();
        };
        _this.name = n;
        return _this;
    }
    TS.prototype.log = function () {
        // let sub = this.subname;
        console.log('hi typescript');
    };
    TS.prototype.say = function () { };
    return TS;
}(Program));
var JAVASCRIPT = /** @class */ (function (_super) {
    __extends(JAVASCRIPT, _super);
    // private subname: string = 'good js'
    function JAVASCRIPT(n) {
        var _this = _super.call(this) || this;
        _this.sayHi = function () { };
        _this.name = n;
        return _this;
    }
    JAVASCRIPT.prototype.log = function () { };
    JAVASCRIPT.prototype.say = function () {
        console.log("hello javascript");
    };
    JAVASCRIPT.isJavascript = function (s) {
        return s === 'javascript';
    };
    return JAVASCRIPT;
}(Program));
function T(args) {
    if (args instanceof TS) {
        args.log();
    }
    else if (args instanceof JAVASCRIPT) {
        args.say();
    }
    else {
        console.log("variable [args] is null/undefined of type");
    }
}
var ts = new TS('ts');
var js = new JAVASCRIPT('javascript');
var n1 = null;
T(ts);
T(js);
T(undefined);
ts.sayHi('Goo');
var COLOR;
(function (COLOR) {
    COLOR["red"] = "red";
    COLOR["green"] = "green";
})(COLOR || (COLOR = {}));
var WORD;
(function (WORD) {
    WORD["A"] = "a";
    WORD["B"] = "b";
})(WORD || (WORD = {}));
var x = COLOR.green;
x = WORD.A;
var js1;
var ts1 = new TS('goo');
js1 = ts1;
ts1 = js1;
