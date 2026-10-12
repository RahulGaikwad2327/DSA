class Solution:
    def subarraysDivByK(self, nums: list[int], k: int) -> int:

        mp = {}
        mp = {0:1}

        count = 0 
        sum = 0

        for i in range(len(nums)):
            sum += nums[i]

            res = ((sum%k) + k) % k

            if res in mp:
                count += mp.get(res)
                mp[res] = mp.get(res) + 1

            else:
                mp[res] = 1
        


        return count