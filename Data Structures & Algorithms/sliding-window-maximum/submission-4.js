class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       let left=0;
    let right=0;
    let queue=[];
    let result=[];
    
    while(right<nums.length){
        
        let value=nums[right];
        
        //popupelement 
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
            queue.pop();
        }

        //push the element 
        queue.push(right);
        
        //check that left element present in top of queue
  if (queue[0] < left) {
            queue.shift();
        }
        //reach the kth size
        //window reach 3rd size once reach automatically right++ reaches 3rdsize
        //(0+1>=3) 
        if(right+1 >= k){
            result.push(nums[queue[0]]); // Maximum is at the front of the deque
            left++; // Slide the window
        }
        
        right++;
    }
    return result
    }
}
