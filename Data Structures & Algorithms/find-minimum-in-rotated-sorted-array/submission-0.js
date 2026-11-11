class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
            let min;
    
    for(let i=0;i<nums.length;i++){
        if(min == undefined){
            min=nums[i]  
           
        }else{
           min=Math.min(min,nums[i]) 
        }
    }
    return min;
    }
}
