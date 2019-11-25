var Tree = /** @class */ (function () {
    function Tree(opt) {
        this.data = [];
        this.selected = opt.selected || [];
    }
    Tree.prototype.saveData = function (data) {
        var _this = this;
        data.forEach(function (v) {
            _this.data[v.id] = v;
        });
    };
    Tree.prototype.isChecked = function (v) {
        return this.selected.some(function (i) { return i.id === (typeof v === 'number' ? v : v.id); });
    };
    return Tree;
}());
var t;
t = new Tree({});
t.saveData([{
        id: 1,
        name: 'book',
        children: [{
                id: 11,
                name: 'book 1'
            }]
    }]);
console.log(t.data);
