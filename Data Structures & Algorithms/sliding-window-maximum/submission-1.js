class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
            
    let result=[];
    let max=-1;
    for(let i=0;i<nums.length;i++){
        
        if(i+k<=nums.length){
          for(let j=i;j<i+k;j++){
            // console.log(j)
            if(nums[j] > max){
                max=nums[j]
            }
           }
          result.push(max);
          max=-1;
        }
    }
    
    return result;
    }
}
