// Given an integer array arr[], generate all possible subsets using bits, and find how many subsets have:

// Even number of set bits in the XOR of their elements.

// Example:
// arr = [1, 2, 3]
// Subsets = [1], [2], [3], [1,2], [2,3], [1,3], [1,2,3]
// Output: Count of subsets where XOR’s binary form has an even number of 1s.

function countEvenSetBitsSubsets(arr) {
    const n = arr.length;
    let count = 0;

    function countSetBits(x) {
        let setBits = 0;
        while(x>0){
            setBits += x& 1;
            x = x>>1;
        }
        return setBits;
    }
    const totalSubsets = 1<<n;

    for (let i = 1; i< totalSubsets; i++){
        let xorValue = 0;
        for(let j = 0; j<n; j++){
            if(i&(1<<j)){
                xorValue ^= arr[j];
            }
        }
        if(countSetBits(xorValue) % 2 ===0){
            count++;
        }
    }
    return count;
}


// Example usage:
const arr = [1, 2, 3];
console.log(countEvenSetBitsSubsets(arr)); 