class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
           
        //pointers
         let left = 0;
    let right= nums.length-1;
    
    while(left<=right){
        
        let mid=Math.floor((left+right)/2);
        
        if(nums[mid]==target){
            return mid
        }
        
        //check left sort
        if(nums[mid] >= nums[left]){
            if(target >= nums[left] && target < nums[mid]){
                right= mid-1 //left search
            }else{
                left=  mid+1
            }
            
        }else{
            if(target > nums[mid] && target <=nums[right]){
                left = mid+1 //right search
            }else{
                right= mid-1 
            } 
        }
        
        
    }
    
    return -1
    }
}
