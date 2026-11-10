class Solution:
    def firstUniqChar(self, s: str) -> int:

        mp = {}

        n = len(s)

        for i in range(n):
            if s[i] in mp:
                mp[s[i]] = mp[s[i]] + 1
                
            else:
                 mp[s[i]] = 1



        for i in range(n):
              if mp[s[i]] == 1:
                return i
        


        return -1