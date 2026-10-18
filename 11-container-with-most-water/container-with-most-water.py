class Solution:
    def maxArea(self, height: list[int]) -> int:

        left = 0
        right = len(height) - 1
        maxArea = 0

        while left < right:
            width = right - left
            heightmax = min(height[left], height[right])
            area = width * heightmax
            maxArea = max(area, maxArea)

            if(height[left] < height[right]):
                left += 1

            else: 
                right-= 1


        return maxArea            
        