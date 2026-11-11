class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    // let object={}
    // let final=[];
    // //each num as key 
    // //check key frequently increase count as the value
    // for(let i=0;i<nums.length;i++){
    //     if(object[nums[i]]){
    //         object[nums[i]]++;
    //     }else{
    //         object[nums[i]] = 1;
    //     }
    // }
    // console.log(object)
    // //what is object keys done in background learn it
    // let keys=Object.keys(object);
    // keys.sort((a, b) => object[b] - object[a]); // Sort by frequency in descending order

    // // Step 3: Get the top K elements
    // for (let i = 0; i < k; i++) {
    //     final.push(parseInt(keys[i])); // Convert keys (strings) back to integers
    // }
    
    // return final;

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

    let bucket_store_frequency_byindex_element=[]
    let keys=Object.keys(object);
    
    for(let i=0;i<keys.length;i++){
        
        let value_frequency = object[keys[i]];
        if(bucket_store_frequency_byindex_element[value_frequency]){
            console.log([...bucket_store_frequency_byindex_element[value_frequency],keys[i]])
          bucket_store_frequency_byindex_element[value_frequency]=[...bucket_store_frequency_byindex_element[value_frequency],keys[i]]
        }else{
            bucket_store_frequency_byindex_element[value_frequency]=[keys[i]]
            console.log(bucket_store_frequency_byindex_element)       
        }
    }
    // console.log()
    for(let i=bucket_store_frequency_byindex_element.length;i>0;i--){
         if(bucket_store_frequency_byindex_element[i]){
                     if(final.length < k){
            final.push(...bucket_store_frequency_byindex_element[i])
        }
         }

        console.log(final,"final")
    }
    return final
    }
}
