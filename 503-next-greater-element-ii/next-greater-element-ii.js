/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;

    let ans = new Array(n).fill(-1);

    for(let i = 0; i< n; i++){
        for(let j =1; j<n; j++){
            let index = (i+j) % n ;

            if(nums[index] > nums[i]){
                ans[i] = nums[index];
                break;
            }
        }
    }

    return ans;
};