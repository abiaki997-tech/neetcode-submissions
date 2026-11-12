class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj={}

        for i in range(len(nums)):
            obj[nums[i]] = i

        for j in range(len(nums)):
            balancenum = target - nums[j]

            if (balancenum in obj and j != obj[balancenum]):
              return [j,obj[balancenum]]
        return [] 