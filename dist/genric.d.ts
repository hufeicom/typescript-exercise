declare function echo<T>(arg: T): T;
interface echoInterface {
    <T>(arg: T): T;
}
declare let myecho: echoInterface;
interface sayHi {
    (s: string): void;
}
declare abstract class Program {
    private typeName;
    protected run(): void;
}
declare class TS extends Program {
    readonly name: string;
    constructor(n: string);
    log(): void;
    sayHi: sayHi;
    say(): void;
}
declare class JAVASCRIPT extends Program {
    readonly name: string;
    constructor(n: string);
    log(): void;
    sayHi: sayHi;
    say(): void;
    static isJavascript(s: string): boolean;
}
declare function T(args: JAVASCRIPT | TS | null | undefined): void;
declare let ts: TS;
declare let js: JAVASCRIPT;
declare let n1: null;
declare enum COLOR {
    red = "red",
    green = "green"
}
declare enum WORD {
    A = "a",
    B = "b"
}
declare let x: string;
declare let js1: JAVASCRIPT;
declare let ts1: TS;
