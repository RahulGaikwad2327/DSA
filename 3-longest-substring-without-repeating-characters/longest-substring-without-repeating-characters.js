/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
   let map = new Map();
   let left = 0;
   let right = 0;
   let max = 0;

   while(right < s.length){
    let char = s[right];

    if(map.has(char)){
        left = Math.max(left , map.get(char) + 1);

    }

    map.set(char, right);
    
    let length = right-left+1;

    max = Math.max(length, max);

    right++;
   }
    return max;
};
    
