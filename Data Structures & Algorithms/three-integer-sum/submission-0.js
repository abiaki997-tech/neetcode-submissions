class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
         let object={};
    let result=[];
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum == 0){
                    //unique for 
                    let sort_=[nums[i],nums[j],nums[k]].sort();
                    let key_s=`${sort_}`
                    if(!object[key_s]){
                        object[key_s]=true
                        result.push(sort_) 
                    }
                     
                }
                
            }
        }
    }
    
    return result
    }
}
