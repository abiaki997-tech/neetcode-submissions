class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
            let max_profit=0;
    
    for(let i=0;i<prices.length;i++){
     console.log(prices[i],"price")
     for(let j=i+1;j<prices.length;j++){
         let profit = prices[j] - prices[i];
         console.log(profit,"profit");
         if(profit > max_profit){
             max_profit=profit
         }
     }
    }
    
    return max_profit;
    }
}
