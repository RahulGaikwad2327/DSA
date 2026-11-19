class Solution:
    def longestPalindrome(self, s: str) -> int:

        mp = {}

        for char in s:
            mp[char] = mp.get(char, 0) + 1



        length = 0
        his_odd = False

        for freq in mp.values():
            length += math.floor(freq // 2) * 2 


            if freq % 2 != 0:
               his_odd = True


        return length + 1 if his_odd else length     


