class Tree {
    constructor(opt) {
        this.data = [];
        this.selected = opt.selected || [];
    }
    saveData(data) {
        data.forEach(v => {
            this.data[v.id] = v;
        });
    }
    isChecked(v) {
        return this.selected.some(i => i.id === (typeof v === 'number' ? v : v.id));
    }
    setItem(v) {
        let old = this.data[v.id];
        this.data[v.id] = v;
        old && (old.checked != v.checked) && (v.checked ? this.add(v) : this.pop(v));
    }
    pop(v) {
        let i = this.selected.findIndex((m) => m.id === v.id);
        this.selected.splice(i, 1);
    }
    add(v) {
        this.selected.push(v);
    }
}
let t;
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
