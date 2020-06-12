/*
Design a min-max stack that supports push, pop, peek, getMin and, getMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on peek of the stack and return it.
peek() -- Get the element on the peek.
getMin() -- Getting minimum value in the stack at any given point in time.
getMax() -- Getting maximum value in the stack at any given point in time.

MinMaxStack(): - // instantiate a MinMaxStack
push(5): -
getMin(): 5
getMax(): 5
peek(): 5
push(7): -
getMin(): 5
getMax(): 7
peek(): 7
push(2): -
getMin(): 2
getMax(): 7
peek(): 2
pop(): 2
pop(): 7
getMin(): 5
getMax(): 5

*/

class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minMaxStack = [];
        this.top = -1;
    }
    
    isEmpty() {
        return !this.stack.length;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.top];
        }
        return null;
    }

    pop() {
        if (!this.isEmpty()) {
            this.top--;
            this.minMaxStack.pop();
            return this.stack.pop();
        }
        return null;
    }

    push(number) {
        if (this.isEmpty()) {
            this.minMaxStack.push([number, number]);
        } else {
            const min = this.minMaxStack[this.top][0] > number ? number : this.minMaxStack[this.top][0];
            const max = this.minMaxStack[this.top][1] < number ? number : this.minMaxStack[this.top][1];
            this.minMaxStack.push([min, max]);
        }
        this.stack.push(number);
        this.top++;
    }

    getMin() {
        if (!this.isEmpty()) {
            return this.minMaxStack[this.top][0];
        }
        return null;
    }

    getMax() {
        if (!this.isEmpty()) {
            return this.minMaxStack[this.top][1];
        }
        return null;
    }
}

const obj = new MinMaxStack();
obj.push(5);
console.log(obj.getMin()); // 5
console.log(obj.getMax()); // 5
console.log(obj.peek()); // 5

obj.push(7);
console.log(obj.getMin()); // 5
console.log(obj.getMax()); // 7
console.log(obj.peek()); // 7

obj.push(2);
console.log(obj.getMin()); // 2
console.log(obj.getMax()); // 7
console.log(obj.peek()); // 2

console.log(obj.pop()); // 2
console.log(obj.pop()); // 7
console.log(obj.getMin()); // 5
console.log(obj.getMax()); // 5