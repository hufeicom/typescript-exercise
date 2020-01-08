interface Say {
    name: string;
    log(s: string): any;
}
interface NoUse {
    test: string;
    log(s: string): any;
}
declare class People implements Say {
    name: string;
    constructor(name: string);
    log(s: string): void;
}
interface SayHello extends Say {
    sayHi(s: string): any;
}
declare class GoodPeople implements SayHello {
    name: string;
    sayHi(s: string): void;
    log(s: string): void;
}
