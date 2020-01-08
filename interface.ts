interface Say {
    // name:string;
    log(s:string);
}

interface NoUse {
    test: string;
    log(s:string):void;
}


class People implements Say{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    log(s:string){
        console.log( `??${s}?? ${this.name}` )
    }
}

(new People('Jack')).log('a ha')

interface SayHello extends Say{
    sayHi(s:string);
}
class GoodPeople implements SayHello{
    name:string;
    sayHi(s:string){
        console.log(s)
    }
    log(s:string){
        console.log(s)
    }
}
(new GoodPeople()).sayHi('hello');
(new GoodPeople()).log('log');


interface Name {
    first: string;
    second: string;
}

let n2:Name;

n2 = {
    first: 'boo',
    second: 'foo'
}

n2 = {
    second: 'boo'
}


