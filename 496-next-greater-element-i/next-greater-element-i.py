class Solution:
    def nextGreaterElement(self, nums1: list[int], nums2: list[int]) -> list[int]:
        stack = []
        mp = {}

        for num in nums2:
            while 	len(stack) > 0 and stack[-1] <= num:
                mp[stack[-1]] = num
                stack.pop()
         
            stack.append(num) 


        ans = []

        for num in nums1:
            ans.append(mp.get(num , -1)) 
             


        return ans      
          