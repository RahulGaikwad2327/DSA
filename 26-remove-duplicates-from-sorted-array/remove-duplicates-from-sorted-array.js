/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

let n = nums.length;
  
  let x = 0;

   for(let i=1; i<n; i++){ 

    if(nums[x] !== nums[i]){
        x=x+1;
        nums[x] = nums[i];
        
    }
  
 

}
 return x+1
}