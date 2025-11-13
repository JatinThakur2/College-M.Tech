// 1) Write a program to reverse a linked list iteratively,  recursively.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}
function reverseIteratively(linkedList) {
    let prev = null;
    let current = linkedList.head;
    let next = null;
    
    while (current !== null) {
        next = current.next; 
        current.next = prev; 
        prev = current;      
        current = next;
    }
    linkedList.head = prev; 
}
// recursive method
function reverseRecursively(node) {
    if (node === null || node.next === null) {
        return node;
    }
    let newHead = reverseRecursively(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
}
// 2) Write a program to concatenate two linked lists.
 function concatenateLists(list1, list2) {
    if (list1.head === null) {
        list1.head = list2.head;
        return;
    }
    let current = list1.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = list2.head;
}

