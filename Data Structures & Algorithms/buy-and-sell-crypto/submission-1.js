class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
   let max_profit=0;
    
    //1st pointer - buy
    //2nd pointer - sell
    //if 2nd pointer less than 1st pointer
       // update pointer buy and sell
    //else calcuate max price move 2nd pointer
    let left=0;// 1st pointer
    let right=1;// 2nd pointer
    
    while(right < prices.length){
        if(prices[right] < prices[left]){
            left = right ;//update pointer
            right++;
        }else{
           max_profit = Math.max(max_profit,prices[right] - prices[left]);
           right++;
        }
    
    }
   
    return max_profit;
    }
    

}
