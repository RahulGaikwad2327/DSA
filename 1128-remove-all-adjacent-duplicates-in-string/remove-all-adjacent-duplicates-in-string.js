/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

    let stack = [];
    let res = [];
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }

        if (stack[stack.length - 1] === s[i]){ 
            stack.pop(s[i]);
        continue;
    }

    stack.push(s[i]);

}

while (stack.length !== 0) {
    res.push(stack.pop())
}

res.reverse();

return res.join('');
 }