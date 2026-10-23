class Solution:
    def reverseString(self, s: list[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """


        stack = []

        for char in s:
            stack.append(char)


        i = 0

        while len(stack) > 0:
            s[i] = stack.pop()
            i += 1



        return s        
        