(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } else {
        factory(null, window)
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App {
        constructor(todos = []) {
            this.todos = todos;
        }
        toggle(id) {
            this.todos.forEach(v => {
                if (v.id === id)
                    v.done = !v.done;
            });
        }
        add(name) {
            let newTodo = {
                id: Date.now(),
                name: name,
                done: false
            };
            this.todos.push(newTodo);
            return newTodo;
        }
    }
    exports.App = App;
});
