class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
             for(let i=0;i<matrix.length;i++){
         let second_arr=matrix[i];
         for(let j=0;j<second_arr.length;j++){
             console.log(second_arr[j])
             
             if(target==second_arr[j]){
                 return true
             }
         }
     }
   return false
    }
}
