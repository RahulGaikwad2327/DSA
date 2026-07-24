/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let arr = nums.map((val, idx) => [val, idx]);
        
        // Sort array based on value
        arr.sort((a, b) => a[0] - b[0]);

        let i = 0, j = nums.length - 1;

        while (i < j) {
            let sum = arr[i][0] + arr[j][0];

            if (sum === target) {
                // Return original indices of the found pair
                return [arr[i][1], arr[j][1]];
            } else if (sum < target) {
                // Increase sum by moving left pointer right
                i++;
            } else {
                // Decrease sum by moving right pointer left
                j--;
            }
        }
        
        // No pair found
        return [-1, -1];
    }
    
