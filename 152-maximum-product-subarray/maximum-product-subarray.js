/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let currentMax = nums[0];
    let currentMin = nums[0];
    let answer = nums[0];

    for(let i=1; i<nums.length; i++){
        let num = nums[i];
        let prevMax = currentMax;
        let prevMin = currentMin;

        currentMax = Math.max(num, num*prevMax, num*prevMin);
        currentMin = Math.min(num, num*prevMax, num*prevMin);
        answer = Math.max(answer , currentMax);

    }

    return answer;
   

};