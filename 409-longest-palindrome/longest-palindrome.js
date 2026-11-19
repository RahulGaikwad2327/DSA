/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map();

  for(let char of s){
    map.set(char, (map.get(char) || 0) + 1);
  }   

   let length = 0;
   let isodd = false;

   for(let freq of map.values()){
    length += Math.floor(freq / 2) * 2;

    if(freq % 2 !== 0){
        isodd = true;
    }

   }


   return isodd ?  length + 1 : length;

};