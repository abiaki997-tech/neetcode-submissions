class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let obj= new Set();
      let max=0;
      let left=0;

      for(let right=0;right<s.length;right++){

         while  (obj.has(s[right])){
            obj.delete(s[left])
            left++;
         }
         obj.add(s[right]);
         max = Math.max(max,right-left+1);
      }

      return max

    }
}
