class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let object={};
    
        for(let i=0;i<nums.length;i++){
            object[nums[i]]=i;
        }
        
        for(let i=0;i<nums.length;i++){
            //7-3=4 => 4 which key in object
            const key = target - nums[i];
            if(object[key]   && object[key] !== i){
                return [i,object[key]]
            }
        }
        return false;
    }
}
