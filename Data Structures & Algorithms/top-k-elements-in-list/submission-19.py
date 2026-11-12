class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # print(nums)
        obj = {}

        for num in nums:
            if num in obj:
               obj[num] = obj[num] + 1
            else:
               obj[num] = 1

        # print(obj)

        # bucket = [[] for _ in range(len(nums) + 1)]

        bucket = [[] for _ in range(len(nums)+1)]

        for num in obj:
            frequency = obj[num]
            bucket[frequency].append(num)

        result = []

        for i in range(len(bucket)-1,0,-1):
            for num in bucket[i]:
              result.append(num)

            if(len(result) == k):
              return result


        print(topKFrequent([1,2,2,3,3],2))
