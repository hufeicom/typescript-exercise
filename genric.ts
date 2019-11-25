function echo<T>(arg:T):T{ console.log(arg); let b:T = arg; return b}

// let myecho: <T>(arg: T) => T = echo;

console.log( echo(1) )

interface echoInterface{
    <T>(arg:T): T
}

let myecho:echoInterface = echo;
console.log( myecho(1) )


interface sayHi {
    (s:string):void
}

abstract class Program{
    run():void{ 
        console.log(`I am program, and I can run.`)
     }
}



class TS extends Program {
    readonly name: string
    private subname: string = 'good'
    constructor(n:string){
        super()
        this.name = n
    }
    log(){
        let sub = this.subname;
        console.log('hi typescript', sub)
    }
    sayHi:sayHi = (str)=>{
        console.log(`I can run, and I'm TS. and you ${str}`)
        this.run()
    }
}

class JAVASCRIPT{
    name: string
    constructor(n:string){
        this.name = n
    }
    say(){
        console.log("hello javascript")
    }
}

function T(args: JAVASCRIPT|TS|null|undefined):void{
    if( args instanceof TS){
        args.log()
    } else if( args instanceof JAVASCRIPT ) {
        args.say()
    } else {
        console.log( `variable [args] is null/undefined of type`)
    }
}

let ts = new TS('ts')
let js = new JAVASCRIPT('javascript')
let n1 = null;
T(ts)
T(js)
T(undefined)

ts.sayHi('Goo')


enum COLOR{ red="red", green="green"}
enum WORD { A="a", B="b" }
let x = COLOR.green
x = WORD.A



