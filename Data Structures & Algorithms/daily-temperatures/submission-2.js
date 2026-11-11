class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    let result= Array(temperatures.length).fill(0);
    
    // decreasing order store indexes
    let monostack=[];
    
    for(let i=0;i<temperatures.length;i++){
      let currentdaytemp=temperatures[i];
      //while do popup calculation pickout days
      while(monostack.length>0 && temperatures[monostack[monostack.length-1]] < currentdaytemp ){
          let indx_temp = monostack.pop();
          result[indx_temp] =  i - indx_temp
      }
      monostack.push(i);
      console.log(monostack)
    }
    // console.log(stackindx,monostack)
    return result
    }
}
