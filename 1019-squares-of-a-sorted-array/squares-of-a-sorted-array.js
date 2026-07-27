/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let result = new Array(nums.length);

    let left = 0
    let right = nums.length - 1;
    let k = nums.length - 1;

    while (left <= right) {
        let a = Math.abs(nums[left]);
        let b = Math.abs(nums[right]);

        if (a > b) {
            result[k] = a * a;
            left++;
        
        } else {

            result[k] = b * b;
            right--;
        }
        k--;
    }
    return result;






















// Brute Force

// for(let i=0; i<nums.length; i++){
//     nums[i]= nums[i]*nums[i];
// }

// nums.sort((a,b) => a-b);

// return nums;
    
};