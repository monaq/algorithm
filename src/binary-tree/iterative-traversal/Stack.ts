export class Stack<T> {
    data: T[] = [];
    constructor(el?: T) {
        if (el) {
            this.push(el);
        }
    }
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.pop();
    }
    get size() {
        return this.data.length;
    }
}
