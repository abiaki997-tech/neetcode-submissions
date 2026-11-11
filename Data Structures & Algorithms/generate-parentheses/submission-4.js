class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
          let result=[];
    let parenthiscombination=2;
    function backtracing(current,openN,closeN){
        // recursion break meet condtion
        if(n == openN && n == closeN){
            return result.push(current);
        }
        
        //add open parenthis
        //open whenever less than n
        if(openN < n){
            backtracing(current+"(",openN+1,closeN)
        }
        
        //add close parenthis
        //close whenever less than open 
        //open always greater than close 
        if(closeN < openN){
            backtracing(current+")",openN,closeN+1)
        }
    }
    backtracing("",0,0);
    
    return result;
    }
}
