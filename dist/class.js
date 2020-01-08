class B1 {
    say() {
        console.log('I can say [from B1]');
    }
    static extend(option) {
        console.log(this.prototype);
        for (let k in option) {
            this.prototype[k] = option[k];
        }
        return this;
    }
}
class B2 {
    run() {
        console.log('I can run [from B2]');
    }
}
class B {
    constructor() {
    }
    say() {
        console.log('s');
    }
    run() {
        console.log('r');
    }
}
B1.extend({
    walk() {
        console.log('I can walk [from extend B1]');
    }
});
// 把mixins混入定义的类
applyMixins(B, [B1, B2]);
// applyMixins 方法
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
let b = new B();
b.say();
b.run();
console.log(B1);
class BB extends B1 {
    constructor() {
        super();
    }
}
let bb = new BB();
bb.walk();
b.walk();
function MutilInherite() {
}
