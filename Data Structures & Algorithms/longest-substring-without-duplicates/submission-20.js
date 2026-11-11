class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    
    let left =0
    let right=0
    let max_length=Math.min(s.length,1);
    let window_set=new Set();
    while(right < s.length){
        let char = s[right];
        console.log(right,"right")
        console.log(left,"left")
        console.log(window_set,"windowset")
        console.log(char,"char")
        while(window_set.has(char)){
            window_set.delete(s[left])
            left++;
        }
        window_set.add(char)
        let window_size= (right - left ) + 1;
        max_length=Math.max(max_length,window_size)
        right++;
    }

  return max_length;
    }
}
