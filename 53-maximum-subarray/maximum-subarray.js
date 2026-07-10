/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentsum = 0;
  let maxsum =nums[0];

  for(let i=0; i<nums.length; i++){
    currentsum += nums[i];
    maxsum = Math.max(maxsum, currentsum);

    if(currentsum < 0){
        currentsum = 0;
    }
  }

  return maxsum;
};