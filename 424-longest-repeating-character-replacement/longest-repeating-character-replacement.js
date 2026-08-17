/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    let left = 0;
    let right = 0;
    let max = 0;
    let maxfrequency = 0
    let replacement = 0;

    while(right < s.length){
        let char = s[right];

        if(map.has(char)){
            map.set(char, map.get(char) +1);
        } else{
            map.set(char, 1);
        }

        if(map.get(char) > maxfrequency){
            maxfrequency = map.get(char);
        }

        let length = right - left +1;
        replacement = length - maxfrequency;

        while(replacement > k){
            let leftchar = s[left];
            map.set(leftchar, map.get(leftchar) -1);
            left++;

            length = right-left+1;
            replacement = length - maxfrequency;
        }
        max = Math.max(length, max);
        right++;
    }
    return max;
};