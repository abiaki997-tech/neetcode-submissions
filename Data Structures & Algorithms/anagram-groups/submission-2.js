class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

         //create a hashmap
            let object ={};
            
            //each string get frequency key
            for(let i=0;i<strs.length;i++){
            let key = this.generatekey(strs[i]);
            console.log(key,"key")
            if(object[key]){
                object[key].push(strs[i])
            }else{
                object[key] = [strs[i]]
            }
            }
            console.log(object)
            
            return Object.values(object)
    }


 generatekey(str_) {
    //[0,0,0...]
    let array_fill=new Array(26).fill(0);
    
    //str:abce
    //[1,1,1,0,1,0...0]
    //alphabets 26 - 
    // a -> character value 96
    // input each string value - minmumvalue(a->96)
    // a-> 96 - 96 = 0 -> index of that value(0 to 25 only possible
    // get 0th index make increase count of each character value
    for(let i=0;i<str_.length;i++){
        let index = str_[i].charCodeAt(0) - 'a'.charCodeAt(0);
        array_fill[index]++;
    }
    
    // make key '0#1#..0'
    return array_fill.join('#')
  }
}
