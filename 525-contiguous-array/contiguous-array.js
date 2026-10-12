/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0,-1);

    let length = 0;
    let maxlength = 0;
    let sum = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0){
            sum -= 1;

        } else {
            sum += 1;
        }

        if(map.has(sum)){
            length = i - map.get(sum);
            maxlength = Math.max(maxlength, length);
        }
        else{
            map.set(sum, i);
        }
    }

    return maxlength;
    
};