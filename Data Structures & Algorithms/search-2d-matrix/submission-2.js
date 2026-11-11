class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
      let row=matrix.length;
      let col=matrix[0].length;
      let total=(row*col)-1;
      let left=0;
      let right=total;
      while(left <= right){
          let mid= Math.floor((left+right)/2);
          let i = Math.floor(mid/col);//mid/col;
          let j = Math.floor(mid%col);
      
          if(matrix[i][j] == target){
              return true
          }else if(target > matrix[i][j]){
              left = mid+1;
          }else{
              right = mid-1;
          }
          
      }
      return false
    }
}
