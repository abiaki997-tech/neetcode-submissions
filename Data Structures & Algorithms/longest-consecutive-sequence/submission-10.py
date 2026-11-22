class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        maxcount=0
        numset = set(nums)
        print(numset)
        for num in numset:
            if num-1 not in numset:
                current_num= num
                currentcount= 1
                while current_num + 1 in numset:
                    current_num += 1
                    currentcount= currentcount+1
                maxcount = max(maxcount,currentcount)
        return maxcount