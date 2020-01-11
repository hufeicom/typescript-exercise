let n = "Global Name";
function () {
    let o = {
        name: "O NAME",
        say: () => {
            console.log(this);
            console.log(this.name);
        }
    };
    o.say();
}
