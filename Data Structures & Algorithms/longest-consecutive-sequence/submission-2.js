class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       //[2,20,4,10,3,4,5]
   //check if 2+1-> 3 finds => 3+1=4 finds => 4+1=5..
   //count increase
   
   let maxcount=0;
   
   if(nums.length == 0){
       maxcount=0;
   }
//   [2,20,4,10,3,4,5]
   for(let i=0;i<nums.length;i++){
       let current_num=nums[i];
       let current_count=1;//[100, 4, 200, 1, 3, 2]
       // [100] -> one consective number right
    //  check
         // if 2+1-> 3 is avl--> 3+1->4 is avl
         // else 20+1 -> 21 is avl
         // inner loop check full 2+1 to 4+1 
         // inner loop restart 
         // 5+1=6 stops because no 6
       for(let j=0;j<nums.length;j++){
           if(current_num+1 == nums[j]){
               current_num=current_num+1;//2+1=3 check 3 element
               current_count=current_count+1;
               j=-1//restarted inner loop
           }
       }
       
       //every outer loop
       //2 -> 5 (current count check)
       //20 -> 21 (current count check)
       //4-> 5 (current count check)
       if(current_count > maxcount){
           maxcount = current_count
       }
   }
   return maxcount;
    }
}
