class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:

        mp = {0:1}

        sum = 0
        count = 0

        for i in range(len(nums)):
            sum += nums[i]

            if sum - k in mp:
                count += mp.get(sum - k, 0)

            if sum in mp:
                mp[sum] = mp.get(sum, 0) + 1

            else:
                mp[sum] = 1

        return count
