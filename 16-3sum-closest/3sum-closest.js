/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    // OPTIMAL SOLUTION

    nums.sort((a, b) => a - b);

    let n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }

    return closestSum;


















    //BRUTE FORCE SOLUTION

    // let n = nums.length;
    // let closestSum = nums[0] + nums[1] + nums[2];
    // for (let i = 0; i < n - 2; i++) {
    //     for (let j = i + 1; j < n - 1; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             let sum = nums[i] + nums[j] + nums[k];
    //             if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
    //                 closestSum = sum;

    //             }
    //             if(sum === target){
    //                 return target;
    //             }

    //         }
    //     }
    // }

    // return closestSum;

};