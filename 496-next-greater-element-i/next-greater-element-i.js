/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
 let stack = [];
 let map = new Map();

 for(let num of nums2){
    while(stack.length > 0 && stack[stack.length -1] <= num){
        map.set(stack[stack.length -1], num);
        stack.pop();
       
    } 
    
    stack.push(num);
 }
 let ans = [];
 for(let num of nums1){
    ans.push(map.get(num) ?? -1);
 }
 return ans;
};