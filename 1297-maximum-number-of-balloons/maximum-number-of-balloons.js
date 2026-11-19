/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = new Map();

    for (let char of text) {
            map.set(char, (map.get(char) || 0) + 1);
    }

    let b = map.get('b') || 0;
    let a = map.get('a') || 0;
    let l = map.get('l') || 0;
    let o = map.get('o') || 0;
    let n = map.get('n') || 0;

    return Math.min(b,
        a,
        Math.floor(l / 2),
        Math.floor(o / 2),
        n);

};