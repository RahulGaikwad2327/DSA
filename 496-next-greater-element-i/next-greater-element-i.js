/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums1.length; i++) {

        let index = -1;

        // Step 1: Find current element in nums2
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                index = j;
                break;
            }
        }

        // Step 2: Find Next Greater Element
        for (let k = index + 1; k < nums2.length; k++) {
            if (nums2[k] > nums1[i]) {
                ans[i] = nums2[k];
                break;
            }
        }
    }

    return ans;
};