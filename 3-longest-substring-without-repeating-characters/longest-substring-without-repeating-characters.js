/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
    let left = 0;
    let right = 0;
    let max = 0;
    let map = new Map();

       while(right < s.length) {

        let char = s[right];

        if (map.has(char)) {
            left = Math.max(left, map.get(char) + 1);
        } 
            map.set(char, right);
        

       

        let length = right - left + 1;
        max = Math.max(max, length);
        right++;
    }

    return max;
};
    
