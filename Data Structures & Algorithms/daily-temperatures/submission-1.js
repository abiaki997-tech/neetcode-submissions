class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
            let result=[];
    let found=false;

    for(let i=0;i<temperatures.length;i++){
        let current_day_temp=temperatures[i];
        console.log(current_day_temp,"i")
         found=false;
        for(let j=i+1;j<temperatures.length;j++){
           
            let next_day_temp=temperatures[j];
            // console.log(next_day_temp,"j")
            if(next_day_temp > current_day_temp){
                console.log(next_day_temp , current_day_temp,j-i)
                result.push(j-i)
                found = true
                break;
            }
        }
        
        if(found == false){
            result.push(0)
        }
    }
    return result
    }
}
