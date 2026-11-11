class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
               if (s.length != t.length) {
            return false
        }
        let object = {};
        for (let i = 0; i < s.length; i++) {
            object[s[i]] = (object[s[i]] || 0) + 1;
            object[t[i]] = (object[t[i]] || 0) - 1;
        }

        for (let key in object) {
            if (object[key] !== 0) return false;
        }
        return true;
    }
}