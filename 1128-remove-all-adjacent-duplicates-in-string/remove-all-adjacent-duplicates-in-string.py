class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        res = []
        n = len(s)

        for i in range(n):
            if len(stack) == 0:
                stack.append(s[i])
                continue

            if stack[-1] == s[i]:
                stack.pop()
                continue


            stack.append(s[i])


        while len(stack) != 0:
            res.append(stack.pop())        


        res.reverse()
        return "".join(res)   
