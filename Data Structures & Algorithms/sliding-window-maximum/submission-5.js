class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0; // Start of the window
    let right = 0; // End of the window
    let queue = []; // Deque to store indices
    let result = []; // Result array to store maximums

  
    while (right < nums.length) {
        // Remove smaller elements from the back of the deque
        //By removing the front element (queue.shift()), you might accidentally discard the maximum element of the current window.
        while (queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }

        // Add the current index to the deque
        queue.push(right);


        // If the window size is at least k, record the maximum
        //reach the kth size
        //window reach 3rd size once reach automatically right++ reaches 3rdsize
        //(0+1>=3) 
        if (right + 1 >= k) {
            result.push(nums[queue[0]]); // Maximum is at the front of the deque
            left++; // Slide the window
        }
      
        // Remove elements from the front if they are out of the current window
       //0<1 0 is less than 1 true 
        if (queue[0] < left) {
            queue.shift();
        }


        right++; // Expand the window
    }

    return result;
    }
}
