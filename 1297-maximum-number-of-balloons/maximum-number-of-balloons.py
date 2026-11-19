class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:

        mp = {}

        for char in text:
            
            
              mp[char] = mp.get(char, 0) + 1
            



        b = mp.get('b') or 0
        a = mp.get('a') or 0
        l = mp.get('l') or 0
        o = mp.get('o') or 0
        n = mp.get('n') or 0
        

        return min(b , 
                   a , 
                   math.floor(o/2),
                   math.floor(l/2), 
                   n)