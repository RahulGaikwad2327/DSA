/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {

    let left = 0;
    let right = 0;
    let zeros = 0;
    let max = 0;

    while (right < nums.length) {
        let char = nums[right];

        if (char === 0) {
            zeros++;
        }
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }

        let length = right - left + 1;
        max = Math.max(max, length);
        right++;
    }
    return max;
};