class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let left=0;
    // let right=0;
    let maxlength=0;
    let object={};
    let max_char=null;
    let max_frequency=0;
    //{a:2,b:1}
    for(let right=0;right<s.length;right++){
        //calculate char
        let char=s[right];
        
        if(object[char]==undefined){
            object[char]=1;
        }else{
            object[char]=object[char]+1;
        }
        
        //get maxchar
        if(object[char] > max_frequency){
            max_char=char;
            max_frequency=object[char]
        }
        
        //calculate window size
        let windowsize=right-left+1;
        //check window is invalid
        //   console.log(max_frequency,windowsize, char,"AS")
        if(windowsize-max_frequency >  k){
            object[s[left]]--
            left++;
        }
        // console.log(windowsize-max_frequency >  k,"window is invalid")
        maxlength=Math.max(maxlength,right-left+1)
        
    }
    return maxlength;
    }
}
