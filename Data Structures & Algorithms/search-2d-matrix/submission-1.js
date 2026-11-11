class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
             for(let i=0;i<matrix.length;i++){
         let second_arr=matrix[i];
         let left=0;
         let right=second_arr.length-1;
         while(left <= right){
             let mid=Math.floor((left+right)/2);
        
             console.log(matrix[i][left],"left")
             console.log(matrix[i][mid],"mid")
             console.log(matrix[i][right],"right")
             console.log(i,"i")
             if(matrix[i][mid] == target){
                 return true
             }else if(target > matrix[i][mid]){
                 left  = mid+1
             }else{
                 right = mid-1
             }
         }
         
     }
   return false
    }
}
