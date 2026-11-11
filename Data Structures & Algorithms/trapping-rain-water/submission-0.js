class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
            let total_water=0;
    
    for(let i=0;i<height.length;i++){
        
        let current_height_building=height[i];
    
       // Find the maximum height on the left of the current bar
        let maxLeft = 0;
        for (let j = 0; j <= i; j++) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        // Find the maximum height on the right of the current bar
        let maxRight = 0;
        for (let j = i; j < height.length; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        

        //Get Min height of Compare Left/Right
        let min_height = Math.min(maxLeft,maxRight);
        //min_height - current height
        //find each block above water storage
        total_water=total_water + (min_height-current_height_building)
    }
    
    return total_water
    }
}
