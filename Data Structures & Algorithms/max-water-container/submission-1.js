class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            let area=0;
    
    
    for(let i=0;i<heights.length;i++){
        for(let j=i+1;j<heights.length;j++){
           let left_height  = heights[i];
           let right_height = heights[j];
           let width = j - i ;
           let min_height = Math.min(left_height,right_height);
           area = Math.max(width * min_height,area)
           
        }
    }
    
    return area
    }
}
