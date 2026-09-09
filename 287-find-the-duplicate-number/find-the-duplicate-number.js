/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
   let slow = nums[0];
   let fast = nums[0];

   while(true){
    slow = nums[slow];
    fast = nums[nums[fast]];

    if(slow === fast){
        break;
    }
   }
   slow = nums[0];
    while(fast !== slow){
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;

};