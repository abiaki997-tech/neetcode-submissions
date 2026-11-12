class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}

        for word in strs:
            sortword = "".join(sorted(word))
            # print(sortword)
            if sortword in obj:
             obj[sortword].append(word)
            else:
              obj[sortword] =  [word]
            
        return list(obj.values())