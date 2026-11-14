class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        mp = {}

        if len(s)  != len(t):
            return False


        for char in s:
            mp[char] = mp.get(char, 0) + 1

        for char in t:
            if char not in mp or mp[char] == 0:
                return False

            mp[char] = mp.get(char) - 1


        return True        