class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    // let max_area=0;
      
    //   for(let i=0;i<heights.length;i++){
    //       let min_height=heights[i]
    //       let sum_width=1;
    //       let first_Area=heights[i]*sum_width;
    //       for(let j=i+1;j<heights.length;j++){
    //           sum_width++;
    //           min_height=Math.min(min_height,heights[j]);
    //           let area = min_height*sum_width;
    //           max_area= Math.max(area,max_area);
    //       }
    //       max_area= Math.max(max_area,first_Area);
    //   }
    
    // return max_area;
       let maxarea=0;
    let stack=[];
    
    for(let i=0;i<heights.length;i++){
        
        let currentindex=i;
        
        while(stack.length>0 && stack[stack.length-1][1] > heights[i]){
            let [stackindex,stackheight]=stack.pop();
            let width=i-stackindex;
            let height=stackheight;
            let area=width*height;
            maxarea=Math.max(maxarea,area);
            currentindex=stackindex
        }
        
        stack.push([currentindex,heights[i]]);
    }
    
    while(stack.length>0){
        let [stackindex,stackheight]=stack.pop();
        let width=heights.length-stackindex;
        let area=width*stackheight;
        maxarea=Math.max(maxarea,area);
    }
    
    return maxarea;
    }

}
