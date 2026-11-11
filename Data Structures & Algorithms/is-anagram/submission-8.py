class Solution:
    def isAnagram(self,a: str, b: str):
        if len(a) != len(b):
            return False

        obj = {}
        obj2 = {}

        for word in a:
            if word in obj:
                obj[word] += 1
            else:
                obj[word] = 1

        for word in b:
            if word in obj2:
                obj2[word] += 1
            else:
                obj2[word] = 1

        return obj == obj2