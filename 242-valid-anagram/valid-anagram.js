/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let map = new Map();

    if (s.length !== t.length) {
    return false;
}

    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of s) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }

        map.set(char, map.get(char) - 1);
    }

    return true;
};
    
