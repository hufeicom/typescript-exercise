declare abstract class B1 {
    say(): void;
    static extend(option: any): typeof B1;
}
declare abstract class B2 {
    run(): void;
}
declare class B implements B1, B2 {
    constructor();
    say(): void;
    run(): void;
}
declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
declare let b: B;
declare class BB extends B1 {
    constructor();
}
declare let bb: BB;
declare function MutilInherite(): void;
