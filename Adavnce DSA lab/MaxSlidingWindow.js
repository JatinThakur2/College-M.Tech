// Main algorithm only (using Max Heap with lazy deletion)
function maxSlidingWindow(nums, k) {
    class MaxHeap {
        constructor() {
            this.heap = [];
            this.toRemove = new Map();
        }
        push(val) {
            this.heap.push(val);
            this._siftUp(this.heap.length - 1);
        }
        pop() {
            this._cleanTop();
            if (this.heap.length === 0) return null;
            const max = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this._siftDown(0);
            }
            return max;
        }
        top() {
            this._cleanTop();
            return this.heap.length > 0 ? this.heap[0] : null;
        }
        remove(val) {
            this.toRemove.set(val, (this.toRemove.get(val) || 0) + 1);
            this._cleanTop();
        }
        _cleanTop() {
            while (this.heap.length > 0 && this.toRemove.has(this.heap[0])) {
                const topVal = this.heap[0];
                const count = this.toRemove.get(topVal);
                if (count === 1) this.toRemove.delete(topVal);
                else this.toRemove.set(topVal, count - 1);
                this._swap(0, this.heap.length - 1);
                this.heap.pop();
                this._siftDown(0);
            }
        }
        _siftUp(idx) {
            let parent = Math.floor((idx - 1) / 2);
            while (idx > 0 && this.heap[idx] > this.heap[parent]) {
                this._swap(idx, parent);
                idx = parent;
                parent = Math.floor((idx - 1) / 2);
            }
        }
        _siftDown(idx) {
            const n = this.heap.length;
            while (true) {
                let largest = idx;
                let left = 2 * idx + 1;
                let right = 2 * idx + 2;
                if (left < n && this.heap[left] > this.heap[largest]) largest = left;
                if (right < n && this.heap[right] > this.heap[largest]) largest = right;
                if (largest === idx) break;
                this._swap(idx, largest);
                idx = largest;
            }
        }
        _swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }
    }
    const heap = new MaxHeap();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]);
        if (i >= k - 1) {
            result.push(heap.top());
            heap.remove(nums[i - k + 1]);
        }
    }
    return result;
}

console.log(maxSlidingWindow([2,4,4, 3, 4], 3))