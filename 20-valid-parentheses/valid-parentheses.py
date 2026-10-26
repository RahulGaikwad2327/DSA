class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        n = len(s)

        for i in range(n):
            ch = s[i]

            if(ch == '(' or ch == '[' or ch == '{'):
                stack.append(ch)
            

            elif ch == ')':
                if len(stack) == 0 or stack[-1]  != '(':
                    return False


                stack.pop()

            elif ch == '}':
                if len(stack) == 0 or stack[-1] != '{':
                    return False


                stack.pop()  

            elif ch == ']':
                if len(stack) == 0 or stack[-1]  != '[':
                    return False


                stack.pop()            
        
        return len(stack) == 0
  
