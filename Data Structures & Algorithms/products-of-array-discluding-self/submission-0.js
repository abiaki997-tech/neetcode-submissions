class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let final = [] ;
    
    for(let i=0;i<nums.length;i++){
        let i_cal=1;
        for(let j=0;j<nums.length;j++){
               if(i!=j){
                  i_cal=(i_cal) * nums[j] 
               }
               
        }
        final.push(i_cal);
    }
    return final;
    }
}
