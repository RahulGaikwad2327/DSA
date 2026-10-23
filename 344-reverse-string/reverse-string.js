/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let stack  = [];

    for(let char of s){
        stack.push(char);
    }

    let i =0;

    while(stack.length > 0){
        s[i] = stack.pop();
        i++;
    }

    return s;
    
};