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
    }
    Program.prototype.run = function () {
        console.log("I am program, and I can run.");
    };
    return Program;
}());
var TS = /** @class */ (function (_super) {
    __extends(TS, _super);
    function TS(n) {
        var _this = _super.call(this) || this;
        _this.subname = 'good';
        _this.sayHi = function (str) {
            console.log("I can run, and I'm TS. and you " + str);
            _this.run();
        };
        _this.name = n;
        return _this;
    }
    TS.prototype.log = function () {
        var sub = this.subname;
        console.log('hi typescript', sub);
    };
    return TS;
}(Program));
var JAVASCRIPT = /** @class */ (function () {
    function JAVASCRIPT(n) {
        this.name = n;
    }
    JAVASCRIPT.prototype.say = function () {
        console.log("hello javascript");
    };
    return JAVASCRIPT;
}());
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
