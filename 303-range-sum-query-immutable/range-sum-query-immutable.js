/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    this.prefix = new Array(nums.length +1);
    this.prefix[0] = 0;

    for(let i = 0; i<nums.length; i++){
        this.prefix[i+1] = this.prefix[i] + nums[i];
    }  
   
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {


       return this.prefix[right + 1] - this.prefix[left];

}
   

   






//    let sum = 0;
   

//     for (let i = left; i <= right; i++) {
//         sum += this.nums[i];
//     }

//     return sum;
    
    
// };

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */