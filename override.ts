function say(x:string):void;
function say(x:number, s:string):void;
function say(x:number, s:boolean):void;
function say(x:number, s:symbol):void;
function say(x:any, s?:any):void{
    if(typeof x === 'number'){
        console.log( (new Array(x)).join(s))
    } else if(typeof x === 'string') {
        console.log( ' boo ')
    }
}

enum Color {
    Symbol('red')
    Symbol('blue')
    Symbol('green')
}

console.log(Color[Symbol('red')])

// say( 'boo')
// say(5, false)
// say(5, Symbol())