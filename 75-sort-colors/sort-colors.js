/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n = nums.length;
  let low = 0;
  let mid = 0;
  let high = n-1;

  while( mid <= high){

    if(nums[mid] === 0){
        let temp  = nums[low];
        nums[low] = nums[mid];
        nums[mid] = temp;
        low++;
        mid++;
    }

   else if (nums[mid] == 1) {
       mid++;
}
    else {
     let temp  = nums[mid];
        nums[mid] = nums[high];
        nums[high] = temp;
        high--;
}
  }

  return nums;







}









//BRUTE FORCE SOLUTION
//    let zero = 0;
//    let one = 0;
//    let two = 0;

//    for(let i=0; i<nums.length; i++){

//    if(nums[i] === 0){
//     zero++;
//    }
//    else if(nums[i] === 1){
//     one++;
//    }
//    else { 
//      two++;
//    }
//    }

//    let i = 0;

//    while(zero > 0){ 
//     nums[i] = 0;
//     zero--;
//     i++;
//    }

//    while(one > 0){
//     nums[i] = 1;
//     one--;
//     i++;
//    }

//    while(two > 0){
//     nums[i] = 2;
//     two--;
//     i++;
//    }

//    return nums;
    
// };