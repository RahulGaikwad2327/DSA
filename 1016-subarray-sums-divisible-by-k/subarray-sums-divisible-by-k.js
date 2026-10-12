/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let  map = new Map();
    map.set(0,1);
    
    let count = 0;
    let sum = 0;

    for(let i = 0; i<nums.length; i++){
        sum += nums[i];

        let res = ((sum%k) + k)%k;

        if(map.has(res)){
            count += map.get(res);
            map.set(res, (map.get(res) + 1));
        }
        else{
            map.set(res, 1);
        }
    }
  return count;
};
