class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            let pointer1 = 0;
    let pointer2 = s.length - 1;

    while (pointer1 < pointer2) {
        // Skip non-alphanumeric characters (spaces included)
        if (!(/[a-zA-Z0-9]/.test(s[pointer1]))) {
            pointer1 += 1;
        } else if (!(/[a-zA-Z0-9]/.test(s[pointer2]))) {
            pointer2 -= 1;
        } else if (s[pointer1].toLowerCase() === s[pointer2].toLowerCase()) {
            pointer1 += 1;
            pointer2 -= 1;
        } else {
            return false;
        }
    }
    return true;
    }
}
