class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
                const delimiter = "#"; // Custom delimiter
    return strs.map(str => str.length + delimiter + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
          const result = [];
    let i = 0;

    while (i < str.length) {
        // Find the position of the delimiter
        const delimiterIndex = str.indexOf("#", i);

        // Extract the length of the next string
        const length = parseInt(str.slice(i, delimiterIndex), 10);

        // Extract the actual string using the length
        const strs = str.slice(delimiterIndex + 1, delimiterIndex + 1 + length);

        // Push the string into the result array
        result.push(strs);

        // Move the pointer to the next string
        i = delimiterIndex + 1 + length;
    }

    return result;
    }
}
