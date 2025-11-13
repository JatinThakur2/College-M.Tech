/*
Implement this data structure using standard Stack and Queue operations only

pushStack(x) – Push an element x into a stack.

popStack() – Remove and return the top element from the stack.

enqueue(x) – Insert an element x into a queue.

dequeue() – Remove and return the front element from the queue.

transfer() – Transfer all elements from the stack to the queue in such a way that the order of elements in the queue remains FIFO.

**Jatin Thakur 255030001**
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack = [];
let queue = [];
// pushStack(x) – Push an element x into a stack.
function pushStack(x) {
    stack.push(x);
    console.log(`Pushed ${x} to stack. Current stack:`, stack);
    return stack;
}
// popStack() – Remove and return the top element from the stack.
function popStack(){
    if(stack.length === 0){
        console.log("stack is empty");
        return null;
    }
    const poppedValue = stack.pop();
    console.log(`Popped ${poppedValue} from stack. Current stack:`, stack);
    return poppedValue;
}
// enqueue(x) – Insert an element x into a queue.
function enqueue(x){
    queue.push(x);
    console.log('Enqueued', x, 'to queue. current queue:', queue);
    return queue;
}
// dequeue() – Remove and return the front element from the queue.
function dequeue(){
    if(queue.length === 0){
        console.log("Queue is empty");
        return null;
    }
    let dequeuedValue = queue.shift();
    console.log('dequeued', dequeuedValue, 'from queue. current queue:', queue);
    return dequeuedValue;
}

//transfer() – Transfer all elements from the stack to the queue in such a way that the order of elements in the queue remains FIFO.

function transfer(){
    let tempArray = [];
    
    while(stack.length > 0){
        let element = stack.pop();
        tempArray.push(element);
    }
    
    while(tempArray.length > 0){
        let element = tempArray.pop();
        queue.push(element);
        console.log('Transferred', element, 'from stack to queue.');
    }
    
    console.log('current stack:', stack);
    console.log('current Queue:', queue);
    return queue;
}
// run test case
function testPushStack() {
    rl.question('Enter array length for pushStack: ', (length) => {
        const n = parseInt(length);
        rl.question('Enter array elements separated by space: ', (elements) => {
            const arr = elements.split(' ').map(Number);
            console.log('\nTesting pushStack:');
            for(let i = 0; i < n && i < arr.length; i++) {
                pushStack(arr[i]);
            }
            testPopStack();
        });
    });
}

function testPopStack() {
    rl.question('\nEnter number of pop operations: ', (count) => {
        const n = parseInt(count);
        console.log('\nTesting popStack:');
        for(let i = 0; i < n; i++) {
            popStack();
        }
        testEnqueue();
    });
}

function testEnqueue() {
    rl.question('\nEnter array length for enqueue: ', (length) => {
        const n = parseInt(length);
        rl.question('Enter array elements separated by space: ', (elements) => {
            const arr = elements.split(' ').map(Number);
            console.log('\nTesting enqueue:');
            for(let i = 0; i < n && i < arr.length; i++) {
                enqueue(arr[i]);
            }
            testDequeue();
        });
    });
}

function testDequeue() {
    rl.question('\nEnter number of dequeue operations: ', (count) => {
        const n = parseInt(count);
        console.log('\nTesting dequeue:');
        for(let i = 0; i < n; i++) {
            dequeue();
        }
        testTransferInput();
    });
}

function testTransferInput() {
    rl.question('\nEnter array length for transfer: ', (length) => {
        const n = parseInt(length);
        rl.question('Enter array elements separated by space: ', (elements) => {
            const arr = elements.split(' ').map(Number);
            for(let i = 0; i < n && i < arr.length; i++) {
                pushStack(arr[i]);
            }
            console.log('\nTesting transfer:');
            transfer();
            rl.close();
        });
    });
}

testPushStack();

