class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
  let object={};
  let maxcount=0;
  if(nums.length == 0){
      return maxcount = 0 
  }
  
  // Store all numbers in the object
  for(let i=0;i<nums.length;i++){
    object[nums[i]] = true;
  }
  console.log(object,"obej")
  for(let i=0;i<nums.length;i++){
      let currentcount=1;
      console.log(nums[i],"wd")
      if(!object[nums[i]-1] ){
          console.log(nums[i],"ASd")
          let current_num=nums[i];
          console.log(current_num+1,"object[current_num+1]",object[current_num+1])
          
          while(object[current_num+1]){
              currentcount=currentcount+1;
              current_num=current_num+1
          }
      }
      if(currentcount > maxcount){
          maxcount=currentcount;
      }
  }
  return maxcount;
    }
}
