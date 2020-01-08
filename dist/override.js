function say(x, s) {
    if (typeof x === 'number') {
        console.log((new Array(x)).join(s));
    }
    else if (typeof x === 'string') {
        console.log(' boo ');
    }
}
var Color;
(function (Color) {
    Color[Color["Symbol"] = 0] = "Symbol";
})(Color || (Color = {}));
('red');
Symbol('blue');
Symbol('green');
console.log(Color[Symbol('red')]);
// say( 'boo')
// say(5, false)
// say(5, Symbol())
