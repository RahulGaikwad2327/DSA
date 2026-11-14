class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mp = {}

        for char in magazine:
            mp[char] = mp.get(char, 0) + 1


        for char in ransomNote:
            if char not in mp or mp[char] == 0:
                return False



            mp[char] = mp.get(char) - 1


        return True                