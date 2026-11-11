class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let D_="#";
        let e_string="";
        for(let i=0;i<strs.length;i++){
            e_string = e_string + strs[i].length + D_ + strs[i]
        }
        return e_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(estr) {
        let D_="#"
           let final=[];
    let start=0;
    while (start < estr.length){
        //indexOf(searchString, position)
        //pointer fixed
        let D_I = estr.indexOf(D_,start)

        // pointer before get length word
        // substring(indexStart, indexEnd) end behave diff
        let length = parseInt(estr.substring(start,D_I));
    
        // pointer make after get start length cut
        start =  D_I + 1;

        final.push(estr.substring(start,start+length))
    
        //move the pointer next word starting
        start = start + length ;
    }
    return final
    }
}
