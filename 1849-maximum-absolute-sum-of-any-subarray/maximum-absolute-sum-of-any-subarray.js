/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {

    let minSum = nums[0];
    let maxSum = nums[0];
    let answer = Math.abs(nums[0]);

    for(let i =1 ; i<nums.length; i++){
        let num = nums[i];

        maxSum = Math.max(maxSum + num , num);
        minSum = Math.min(minSum + num , num);

        answer = Math.max(answer, Math.abs(minSum) , Math.abs(maxSum));
    }

    return answer;
    
};