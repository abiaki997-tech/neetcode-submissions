class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
            if(s1.length > s2.length){
        return false
    }
    
    let s1_char=Array(26).fill(0);//fixed array
    let s2_char=Array(26).fill(0);//window size movement
    const aCharCode = 'a'.charCodeAt(0); // ASCII code for 'a'
    
    //[1,1,1,...]
    //[0,0,0,...]
    for(let i=0;i<s1.length;i++){
        s1_char[s1.charCodeAt(i)-aCharCode]++;
        s2_char[s2.charCodeAt(i)-aCharCode]++
    }
    
    function compare(s1_char,s2_char){
      for(let j=0;j<26;j++){
          if(s1_char[j] != s2_char[j]){
              return false
          }
      }
      return true;
    }
    
    for(let i=0;i<s2.length;i++){
         
         if(compare(s1_char,s2_char)){
             return true
         }
        //  console.log("s2_char",s2_char)
         s2_char[s2.charCodeAt(i)-aCharCode]--;
         s2_char[s2.charCodeAt(i+s1.length)-aCharCode]++;
    }
    return false
    }
}
