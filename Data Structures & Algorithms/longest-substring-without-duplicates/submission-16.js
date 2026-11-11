class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let length_string=1;
   let max_string=0;
   if(s.length==1){
    max_string=length_string
   }
   let left=0;//1st pointer
   let right=1;//2nd pointer
   let object={};
//   for(let i=right;i<s.length;i++){
     
     while(right < s.length){
    //    console.log(s[left],"left",s[right],"right",
    //    object[s[right]],object,length_string)
       if(s[left] != s[right] && object[s[right]]==undefined){
           object[s[right]]=true
           right++;
           length_string++;
          
       }else{
           object={}
           length_string=1;
           left++;
           right=left+1;
       }
       max_string=Math.max(max_string,length_string) 
   }
  return max_string;
    }
}
