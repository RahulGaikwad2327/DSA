class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:

        intervals.sort(key = lambda a:a[0])

        ans = []
        
        ans.append(intervals[0])

        for i in range(1, len(intervals) ):

            current = intervals[i]
            last = ans[len(ans)-1]

            if last[1] >= current[0]:
                ans[-1][1] = max(last[1], current[1])

            else:
                ans.append(current)
          

        return ans   