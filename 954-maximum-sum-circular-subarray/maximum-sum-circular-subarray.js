/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubarraySumCircular = function(nums) {
      
//       let minSum = nums[0];
//       let maxSum = nums[0];
//       let totalSum = nums[0]

//       let maxAnswer = nums[0];
//       let minAnswer = nums[0];

//       for(let i = 0; i< nums.length; i++){
//         let num = nums[i];
//         totalSum += num;

//         maxSum = Math.max(maxSum + num , num);
//         maxAnswer  = Math.max(maxAnswer, maxSum);

//         minSum = Math.min(minSum + num, num);
//         minAnswer = Math.min(minSum , minAnswer);
//       }

//         if(maxAnswer < 0){
//             return maxAnswer;
//         }

//         let circularMax = totalSum - minAnswer;
//         return Math.max(maxAnswer , circularMax);
      
// };

var maxSubarraySumCircular = function(nums) {

    let minSum = nums[0];
    let maxSum = nums[0];
    let totalSum = nums[0];

    let maxAnswer = nums[0];
    let minAnswer = nums[0];

    for (let i = 1; i < nums.length; i++) {

        let num = nums[i];

        totalSum += num;

        maxSum = Math.max(maxSum + num, num);
        maxAnswer = Math.max(maxAnswer, maxSum);

        minSum = Math.min(minSum + num, num);
        minAnswer = Math.min(minAnswer, minSum);
    }

    if (maxAnswer < 0) {
        return maxAnswer;
    }

    let circularMax = totalSum - minAnswer;

    return Math.max(maxAnswer, circularMax);
};