class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
         let stack=[];
    
    for(let i=0;i<tokens.length;i++){
     let element=tokens[i];
     if(element == "*" ||element == "+" ||element == "-" || element == "/"){
            // Pop the top two numbers from the stack
            let b = stack.pop();
            let a = stack.pop();

            // Perform the operation
            let result;
            if (element === "+") {
                result = a + b;
            } else if (element === "-") {
                result = a - b;
            } else if (element === "*") {
                result = a * b;
            } else if (element === "/") {
                result = Math.trunc(a / b); // Use truncation for division
            }

            // Push the result back to the stack
            stack.push(result);
     }else{
         stack.push(parseInt(element))
     }
    }
    return stack.pop();
    }
}
