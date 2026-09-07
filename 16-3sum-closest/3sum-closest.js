/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums.sort((a,b) => {return a-b})
	let len = nums.length,
		closet = Infinity,
		result = [],
		sum
	for(let i = 0; i<len; ++i){
		let L = i+1,
			R = len -1

		while(L < R){
			sum = nums[i] + nums[L] + nums[R]
			if(Math.abs(target - sum) < Math.abs(target - closet)){
				closet = sum
			}
			if(sum>target) --R
			else if(sum < target) ++L
			else return closet
			while(nums[i] === nums[i+1]) ++i //avoid duplicate
		}
	}
	return closet
};