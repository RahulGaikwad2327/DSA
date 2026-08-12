/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  
        let map = new Map();

        let left  = 0;
        let right = 0;
        let maxlength = 0;

        while(right < fruits.length){

            let currfruits = fruits[right];

            if(map.has(currfruits)){
                map.set(currfruits , map.get(currfruits) +1);
            } else{
                map.set(currfruits , 1);
            }

            while(map.size > 2){
                let leftfruit = fruits[left];

                map.set(leftfruit, map.get(leftfruit) -1);

                if(map.get(leftfruit) === 0){
                    map.delete(leftfruit);
                }
                left++
            }

            let length = right -left +1;
            maxlength = Math.max(maxlength , length);
            right++;
        }

        return maxlength;

    }


