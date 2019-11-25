interface Say {
    name:string;
    log(s:string);
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
