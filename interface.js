var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.log = function (s) {
        console.log("??" + s + "?? " + this.name);
    };
    return People;
}());
(new People('Jack')).log('a ha');
var GoodPeople = /** @class */ (function () {
    function GoodPeople() {
    }
    GoodPeople.prototype.sayHi = function (s) {
        console.log(s);
    };
    GoodPeople.prototype.log = function (s) {
        console.log(s);
    };
    return GoodPeople;
}());
(new GoodPeople()).sayHi('hello');
(new GoodPeople()).log('log');
