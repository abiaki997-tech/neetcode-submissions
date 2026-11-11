class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
              let area=0;
    
    
    // for(let i=0;i<heights.length;i++){
    //     for(let j=i+1;j<heights.length;j++){
    //       let left_height  = heights[i];
    //       let right_height = heights[j];
    //       let width = j - i ;
    //       let min_height = Math.min(left_height,right_height);
    //       area = Math.max(width * min_height,area)
           
    //     }
    // }
    
    let left  = 0;
    let right = heights.length-1;
    
    while(left < right){
          let left_height  = heights[left];
          let right_height = heights[right];
          let width = right - left;
          let min_height = Math.min(left_height,right_height);
          area = Math.max(width * min_height,area)
          
          // find equal height 1 left 6 height
          // left pointer 7 height 
          if(left_height <= right_height){
              left++
          }else{
              right--
          }

    }
    
    return area
    }
}
