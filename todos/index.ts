interface Todo{
    id: number
    name: string
    done: boolean
}

export class App{
    wrap: HTMLElement
    private todos: Todo[]
    constructor(wrap:HTMLElement, todos: Todo[] = []){
        this.wrap = document.createElement('ul')
        wrap.appendChild(this.wrap)
        this.todos = todos
    }
    toggle(id:number){
        this.todos.forEach(v=>{
            if(v.id === id) v.done = !v.done;
        })
    }
    add(name:string){
        let newTodo = {
            id: Date.now(),
            name: name,
            done: false
        }
        this.todos.push(newTodo);
        return newTodo;
    }
    render(list=this.todos){
        this.wrap.innerHTML = list.map( item=> `<li data-id="${item.id}"><label><input type="checkbox" ${item.done ? "checked" : ""}>  ${item.name} </label>`).join('')
    }
}
