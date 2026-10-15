class Solution:
    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:

     intervals.append(newInterval)

     intervals.sort(key= lambda x:x[0])

     ans = []
     ans.append(intervals[0])

     for i in range(1, len(intervals)):
        current = intervals[i]
        last = ans[len(ans)-1]

        if last[1] >= current[0]:
            last[1] = max(last[1], current[1])

        else:
            ans.append(current) 



     return ans        
        