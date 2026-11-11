class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            let stack=[];
    let balancedbrackets={
        "]":"[",
        "}":"{",
        ")":"("
    }
    
    //if closing bracket definetly open bracket
    //if matches true
    //if open bracket push to stack
    
    for(let i=0;i<s.length;i++){
        
        let s_char=s[i];
        //check its closing bracket
        if(balancedbrackets[s_char]){
            let popup=stack.pop();
            if(balancedbrackets[s_char] == popup){
                continue;
            }else{
                return false;
            }
        }else{
            stack.push(s_char)
        }
    }
    if(stack.length ==0 ){
        return true
    }else{
        return false
    }
   
    }
}
