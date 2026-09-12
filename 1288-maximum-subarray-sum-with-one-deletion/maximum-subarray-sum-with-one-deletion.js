/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {

   let nodelete = arr[0];
   let onedelete = -Infinity;
   let answer = arr[0];

   for(let i = 1; i<arr.length; i++){
    let prevnodelete = nodelete;

    nodelete = Math.max(nodelete +arr[i] , arr[i]);
    onedelete = Math.max(onedelete + arr[i] , prevnodelete);

    answer = Math.max(answer , nodelete , onedelete);
   }

   return answer;
    
};