class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let object={}
    let final=[];
    //each num as key 
    //check key frequently increase count as the value
    for(let i=0;i<nums.length;i++){
        if(object[nums[i]]){
            object[nums[i]]++;
        }else{
            object[nums[i]] = 1;
        }
    }
    console.log(object)
    //what is object keys done in background learn it
    let keys=Object.keys(object);
    keys.sort((a, b) => object[b] - object[a]); // Sort by frequency in descending order

    // Step 3: Get the top K elements
    for (let i = 0; i < k; i++) {
        final.push(parseInt(keys[i])); // Convert keys (strings) back to integers
    }
    
    return final;
    }
}
