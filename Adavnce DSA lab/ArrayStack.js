/*
Write a program to implement stack operations (push, pop, peek, isEmpty) using an array.
*/
class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
    this.maxSize = size;
  }
// push element into a array using stack
  push(element) {
    if (this.top >= this.maxSize - 1) return;
    this.stack[++this.top] = element;
    console.log(`Pushed: ${element}`);
    console.log(this.stack);
  }
// pop element from the array using stack
  pop() {
    if (this.top < 0) return;
    const popped = this.stack[this.top];
    this.stack[this.top--] = undefined;
    console.log(`Popped: ${popped}`);
    console.log(this.stack);
  }
// check the peek element in the stack array
 peek() {
    if (this.top < 0) return;
    console.log(`Peek: ${this.stack[this.top]}`);
  }
// check weather the the array is empty or not
 isEmpty() {
    const empty = this.top === -1;
    console.log(`Is Empty: ${empty}`);
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.peek();
stack.isEmpty();
