/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
 let n = nums.length;
 let left = 0;
 let right = 0;
 let minlength = Infinity;
 let sum  = 0;

 while(right < n){
    sum += nums[right];

    while(sum >= target){
        let length = right -left + 1;
        minlength = Math.min(minlength , length);
        sum -= nums[left];
        left++;
    }
    right++;
 }

 if(minlength === Infinity){
    return 0;
 }

 return minlength;
};