//---1)Find the median of two sorted arrays.-----
function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
}
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

//---------------2nd way fo doiing the same task----------------

function median(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 == 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
console.log(median([1, 3], [2])); // Output: 2
console.log(median([1, 2], [3, 4])); // Output: 2.5
