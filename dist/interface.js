class People {
    constructor(name) {
        this.name = name;
    }
    log(s) {
        console.log(`??${s}?? ${this.name}`);
    }
}
(new People('Jack')).log('a ha');
class GoodPeople {
    sayHi(s) {
        console.log(s);
    }
    log(s) {
        console.log(s);
    }
}
(new GoodPeople()).sayHi('hello');
(new GoodPeople()).log('log');
