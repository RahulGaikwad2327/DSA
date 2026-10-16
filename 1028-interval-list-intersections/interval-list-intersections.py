class Solution:
    def intervalIntersection(
        self, firstList: list[list[int]], secondList: list[list[int]]
    ) -> list[list[int]]:
        i = 0
        j = 0
        ans = []
        n = len(firstList)
        n1 = len(secondList)

        while i < n and j < n1:
            start1 = firstList[i][0]
            end1 = firstList[i][1]
            start2 = secondList[j][0]
            end2 = secondList[j][1]

   
            s = max(start1, start2)
            e = min(end1, end2)

            if s <= e:
                ans.append([s, e])

            if end1 <= end2:
                i += 1
            else:
                j += 1

        return ans


        
