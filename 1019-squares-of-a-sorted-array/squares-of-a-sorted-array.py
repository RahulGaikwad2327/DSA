class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:


        result = [0] * len(nums)

        left = 0
        right = len(nums) - 1
        k = len(nums) - 1

        while left <= right:

            a = abs(nums[left])
            b = abs(nums[right])

            if a > b:
                result[k] = a * a
                left += 1
            else:
                result[k] = b * b
                right -= 1

            k -= 1

        return result
        