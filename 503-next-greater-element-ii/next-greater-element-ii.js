/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let stack = [];
    let res = new Array(n).fill(-1);
    for(let i = 0; i< 2*n; i++){
        let idx = i%n;

        while(stack.length > 0 && nums[stack[stack.length -1]] < nums[idx]){
            let poppedIndex = stack.pop();
            res[poppedIndex] = nums[idx];

        }

        if(i<n) {
            stack.push(idx);
        }
    }
    
    return res;
};