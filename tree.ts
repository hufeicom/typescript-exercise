
interface Item {
    id:number
    name:string
    checked?:boolean|undefined
    children?: Array<Item>
}

interface Option{
    selected?:Array<Item>
    data?: Array<Item>
}
class Tree implements Option{
    selected:Array<Item>
    data: Array<Item> = []
    constructor(opt:Option){
        this.selected = opt.selected || []
    }
    saveData(data:Array<Item>){
        data.forEach(v=>{
            this.data[v.id] = v;
        })
    }
    isChecked(v:Item|number):boolean{
        return this.selected.some(i=> i.id === (typeof v === 'number' ? v : v.id))
    }
    setItem(v:Item):void{
        let old = this.data[v.id];
        this.data[v.id] = v;
        old &&  (old.checked != v.checked) && (v.checked ? this.add(v) : this.pop(v))     
    }
    pop(v:Item){
        let i = this.selected.findIndex( (m:Item)=>m.id === v.id)
        this.selected.splice(i,1)
    }
    add(v:Item){
        this.selected.push(v)
    }
}

let t:Tree;
t = new Tree({})
t.saveData([{
    id: 1,
    name: 'book',
    children: [{
        id: 11,
        name:'book 1'
    }]
}])

console.log(t.data)