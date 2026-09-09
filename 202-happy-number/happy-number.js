/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

     function getNext(n) {
        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        return sum;
    }
    let slow = n;
    let fast = n;

  while (true) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));

    if (fast === 1 || slow === 1) {
        return true;
    }

    if (slow === fast) {
        return false;
    }
}
    return true;
};