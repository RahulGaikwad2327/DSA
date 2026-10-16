/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let i = 0;
    let j = 0;
    let n = firstList.length;
    let n1 = secondList.length;

    let ans = [];

    while (i < n && j < n1) {
        let start1 = firstList[i][0];
        let end1 = firstList[i][1];
        let start2 = secondList[j][0];
        let end2 = secondList[j][1];

        let s = Math.max(start1, start2);
        let e  = Math.min(end1, end2);

        if(s <= e){
            ans.push([s,e]);
        }

        
        if (end1 <= end2) {
            i++;
        } else {
            j++;
        }

    }

    return ans;
};