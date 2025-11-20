class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function nextGreaterInLinkedList(head) {
  const vals = [], stack = [], res = [];
  for (let node = head; node; node = node.next) vals.push(node.val);
  res.length = vals.length;
  res.fill(-1);

  for (let i = 0; i < vals.length; i++) {
    while (stack.length && vals[i] > vals[stack.at(-1)])
      res[stack.pop()] = vals[i];
    stack.push(i);
  }

  return res;
}

const buildList = (arr) => arr.reduceRight((next, val) => Object.assign(new ListNode(val), { next }), null);

const head = buildList([4, 5, 2, 25]);
console.log(nextGreaterInLinkedList(head));