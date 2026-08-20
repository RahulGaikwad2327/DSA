/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = new Map();
    let windowmap = new Map();

    let left = 0;
    let right = 0;

    let required = 0;
    let formed = 0;

    let min = Infinity;
    let start =0;

    for(let i= 0; i<t.length; i++){
        let char = t[i];
        if(!map.has(char)){
            required++;
        }
          map.set(char, (map.get(char) || 0) + 1);

    }

    while(right < s.length){
        let char = s[right];

        if(map.has(char)){
            windowmap.set(char  , (windowmap.get(char) || 0) + 1);

            if(windowmap.get(char) === map.get(char)){
                formed++;
            }
        }

        while(formed === required){
            let length = right - left + 1;

            if(length < min){
                min = length;
                start = left;
            }
            let leftchar = s[left];

            if(map.has(leftchar)){
                windowmap.set(leftchar, windowmap.get(leftchar) - 1);
            

            if(windowmap.get(leftchar) < map.get(leftchar)){
                formed--;
            }
            }
            left++; 

        }
        right++;
    }

    if(min === Infinity){
        return "";
    }

    return s.substring(start , start+min);
};


