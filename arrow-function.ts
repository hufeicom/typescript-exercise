let n = "Global Name";

export function f(){
    let o = {
        name: "O NAME",
        say: ()=>{
            console.log(this)
            console.log(this.name)
        }
    }
    o.say();
}
