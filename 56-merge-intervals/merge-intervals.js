/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
     
     intervals.sort((a,b) => a[0]-b[0]);

        let ans =[];

        ans.push(intervals[0]);

        for(let i = 1; i< intervals.length; i++){

            let current = intervals[i];

            let last = ans[ans.length -1];

            if(last[1] >= current[0]){
                last[1] = Math.max(last[1], current[1]);
 
            } else {
                ans.push(current);
            }
        }

        return ans;
     }
