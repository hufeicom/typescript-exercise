interface Item {
    id: number;
    name: string;
    checked?: boolean | undefined;
    children?: Array<Item>;
}
interface Option {
    selected?: Array<Item>;
    data?: Array<Item>;
}
declare class Tree implements Option {
    selected: Array<Item>;
    data: Array<Item>;
    constructor(opt: Option);
    saveData(data: Array<Item>): void;
    isChecked(v: Item | number): boolean;
    setItem(v: Item): void;
    pop(v: Item): void;
    add(v: Item): void;
}
declare let t: Tree;
