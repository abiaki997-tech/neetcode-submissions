class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
 const unique_value = new Set();
    
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            
            let value = board[i][j];
            
            if(value === ".") continue;
            
        let row_unique=`the row ${value} in ${i}`;
        let col_unique=`the col ${value} in ${j}`;
        let box_index=`the box ${value} in ${
            parseInt(i/3) + "-" + parseInt(j / 3)
            }`;
            
      if(unique_value.has(row_unique) || 
         unique_value.has(col_unique) ||
         unique_value.has(box_index)){
          return false  
       }
           unique_value.add(row_unique);
           unique_value.add(col_unique);
           unique_value.add(box_index);
        }
    }
    return true
    }
}
