class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let max_area=0;
      
      for(let i=0;i<heights.length;i++){
          let min_height=heights[i]
          let sum_width=1;
          let first_Area=heights[i]*sum_width;
          for(let j=i+1;j<heights.length;j++){
              sum_width++;
              min_height=Math.min(min_height,heights[j]);
              let area = min_height*sum_width;
              max_area= Math.max(area,max_area);
          }
          max_area= Math.max(max_area,first_Area);
      }
    
    return max_area;
    }
}
