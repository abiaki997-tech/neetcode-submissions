class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
          
    //check and pick small array
  if (nums1.length > nums2.length) {
    return this.findMedianSortedArrays(nums2, nums1);
  }
    
    //make pointers
    let m=nums1.length;
    let n=nums2.length;
    let low=0;
    let high=m;
    
    while(low <= high){
        // [1,3,8,9] -> 4/2-> 2 -> [1,3,8]
        let partition1 =  Math.floor((low + high )/2);
        //[2,4,5,6,7] -> 4+5+1 -> 10/2 -> 5 - (2) -> 3 elements left
        let partition2 =Math.floor((m+n+1)/2 )- partition1;
        
        // nums1: [1, 3, | 8, 9]
        // nums2: [2, 4, 5, | 6, 7]
         let maxleft1 = partition1 <= 0 ? -Infinity : nums1[partition1-1];//nums1
        let maxleft2 = partition2 <= 0 ? -Infinity : nums2[partition2-1];//nums2
        
        let minright1 = partition1 == m ? Infinity : nums1[partition1];
        let minright2 = partition2 == n ? Infinity : nums2[partition2];
        
        //partition found
        if(maxleft1 <= minright2 && maxleft2 <= minright1){
            
            //find a median 
            if((m+n)%2 == 0){
                return (Math.max(maxleft1,maxleft2) + Math.min (minright1,minright2) )/ 2 
            }else{
                //return last value of max
                return Math.max(maxleft1,maxleft2)
            }
        }else if (maxleft1 > minright2){
            high = partition1 - 1; // Move left
        }else{
            low = partition1 + 1; // Move right
        }
        
    }


//       // Ensure nums1 is the smaller array
//   if (nums1.length > nums2.length) {
//     return this.findMedianSortedArrays(nums2, nums1);
//   }

//   const m = nums1.length;
//   const n = nums2.length;
//   let low = 0, high = m;

//   while (low <= high) {
//     const partition1 = Math.floor((low + high) / 2);
//     const partition2 = Math.floor((m + n + 1) / 2) - partition1;

//     const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
//     const minRight1 = partition1 === m ? Infinity : nums1[partition1];

//     const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
//     const minRight2 = partition2 === n ? Infinity : nums2[partition2];

//     // Check if we have found the correct partition
//     if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
//       // If total length is even
//       if ((m + n) % 2 === 0) {
//         return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
//       } else {
//         return Math.max(maxLeft1, maxLeft2);
//       }
//     } else if (maxLeft1 > minRight2) {
//       high = partition1 - 1; // Move left
//     } else {
//       low = partition1 + 1; // Move right
//     }
//   }
    
    }
}
