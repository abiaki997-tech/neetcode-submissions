class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

            // Step 1: Create a set to store unique values found in each row, column, and 3x3 sub-boxes.
    const Unique_Value = new Set();
  
    // Step 2: Loop through each cell of the Sudoku board.
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        // Step 3: Extract the element value from the current cell.
        let element = board[i][j];
        
        // Step 4: Check if the current cell is not empty (i.e., it contains a digit).
        if (element != ".") {

          // Step 5: Create unique codes for the value based on its row, column, and sub-box.
          let rowUniqueCode = `${element} the row found ${i}`;
          let columnUniqueCode = `${element} the column found ${j}`;
          let subBoxUniqueCode = `${element} the row found ${
            parseInt(i / 3) + "-" + parseInt(j / 3)
          } subbox`;
  
          // Step 6: Check if the value's unique codes already exist in the set.
          if (
            Unique_Value.has(rowUniqueCode) ||
            Unique_Value.has(columnUniqueCode) ||
            Unique_Value.has(subBoxUniqueCode)
          ) {

            // If any of the unique codes are already present, then the Sudoku is invalid.
            return false;
          }
  
          // Step 7: If the value's unique codes are not present, add them to the set.
          Unique_Value.add(rowUniqueCode);
          Unique_Value.add(columnUniqueCode);
          Unique_Value.add(subBoxUniqueCode);

        }
      }
    }
  
    // Step 8: If no duplicates are found in rows, columns, or sub-boxes, the Sudoku is valid.
    return true;
    }
}
