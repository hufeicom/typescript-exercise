function echo(arg) { console.log(arg); let b = arg; return b; }
// let myecho: <T>(arg: T) => T = echo;
console.log(echo(1));
let myecho = echo;
console.log(myecho(1));
class Program {
    constructor() {
        this.typeName = 'program';
    }
    run() {
        console.log(`I am program, and I can run. \n My type name is ${this.typeName}`);
    }
}
class TS extends Program {
    // private subname: string = 'good'
    constructor(n) {
        super();
        this.sayHi = (str) => {
            console.log(`I can run, and I'm TS. and you ${str}`);
            this.run();
        };
        this.name = n;
    }
    log() {
        // let sub = this.subname;
        console.log('hi typescript');
    }
    say() { }
}
class JAVASCRIPT extends Program {
    // private subname: string = 'good js'
    constructor(n) {
        super();
        this.sayHi = () => { };
        this.name = n;
    }
    log() { }
    say() {
        console.log("hello javascript");
    }
    static isJavascript(s) {
        return s === 'javascript';
    }
}
function T(args) {
    if (args instanceof TS) {
        args.log();
    }
    else if (args instanceof JAVASCRIPT) {
        args.say();
    }
    else {
        console.log(`variable [args] is null/undefined of type`);
    }
}
let ts = new TS('ts');
let js = new JAVASCRIPT('javascript');
let n1 = null;
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
let x = COLOR.green;
x = WORD.A;
let js1;
let ts1 = new TS('goo');
js1 = ts1;
ts1 = js1;
