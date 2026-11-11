class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let object1 = {};
        let object2 = {};

        if (s.length != t.length) {
            return false
        }
     for(let i=0;i<s.length;i++){
        //  const key=;
         if(object1[s[i]]){
            //  console.log("**",key)
             object1[s[i]]= object1[s[i]] + 1 ;
            //  console.log(object1[key])
         }else{
            object1[s[i]]=1 
         }
         
     }
 console.log(object1)
     for(let j=0;j<t.length;j++){
         if(object2[t[j]]){
            //  console.log("**",key)
             object2[t[j]]= object2[t[j]] + 1 ;
            //  console.log(object1[key])
         }else{
            object2[t[j]]=1 
         }
         
     }
        let keys = Object.keys(object1)
        for (let k = 0; k < keys.length; k++) {
            console.log(keys[k]);
            if (object1[keys[k]] != object2[keys[k]]) {
                return false
            }

        }
        return true
    }
}