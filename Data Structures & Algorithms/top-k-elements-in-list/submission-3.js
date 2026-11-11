class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

          let freqMap = new Map();
    for(let num of nums){
        freqMap.set(num,(freqMap.get(num)||0)+1)
    }
    console.log(freqMap);
    
    //create a empty bucket
    let buckets = Array(nums.length+1).fill().map(()=>[]);
    
    console.log(buckets)
    
    //map bucket frequecny
    for(let [num,freq] of freqMap.entries()){
        buckets[freq].push(num)
    }
    
    console.log(buckets);
    
    //result array push desc
    let result=[];
    
    for(let i=buckets.length-1;i>=0;i--){
        result.push(...buckets[i])
    }
    console.log(result)
    
    return result.slice(0,k)
    
    
    }
}
