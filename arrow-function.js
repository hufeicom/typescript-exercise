var n = "Global Name";
function () {
    var _this = this;
    var o = {
        name: "O NAME",
        say: function () {
            console.log(_this);
            console.log(_this.name);
        }
    };
    o.say();
}
