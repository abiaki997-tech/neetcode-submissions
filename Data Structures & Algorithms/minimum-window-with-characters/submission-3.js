class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        
    const tMap = {};
    const sMap = {};
    for (const char of t) {
        tMap[char] = ( tMap[char] || 0 ) + 1;
    }
    
    //pointers properties
    let left=0,right=0;
    
    //have,need
    let have=0;
    let need=Object.keys(tMap).length;
    
    //window size properties
    let i=0,j=0,minlength=Infinity;
    
    //when left ++
    //when right ++
    while(right<s.length){
        
        let char=s[right];
        
        if(tMap[char]){
            sMap[char] = ( sMap[char] || 0 ) + 1;
        }
        if(tMap[char] && tMap[char] == sMap[char]){
            have++;
        }
        
        //left shrink
        while(need == have){
           let leftchar=s[left];
           if(tMap[leftchar]) {
               sMap[leftchar]--;
           };

           if( sMap[leftchar] < tMap[leftchar]){
             have--;
           }
           let windowsize=right-left+1;
           if(windowsize < minlength){
               i=left;
               j=right;
               minlength=windowsize
           }
           left++;
        }
        right++;
    }
    
    return minlength==Infinity ? "": s.slice(i,j+1)
    }
}
