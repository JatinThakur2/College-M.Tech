//------2) Given an array of integers, find the length of the longest increasing subsequence.

let longest = (num) => {
  let dp = new Array(num.length).fill(1);
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < i; j++) {
      if (num[i] > num[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(longest([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
