class Solution:
    def findMaxLength(self, nums: List[int]) -> int:

        mp  = {}
        mp[0] = -1
        length = 0
        maxlength = 0
        sum = 0

        for i in range(len(nums)):
         if nums[i] == 0:
            sum -= 1

         else:
             sum += 1

         if sum in mp:
           length = i - mp.get(sum)
           maxlength = max(maxlength, length)

         else:
            mp[sum] = i


        return maxlength                   

        