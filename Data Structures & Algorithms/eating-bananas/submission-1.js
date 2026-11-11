class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    let left=1;
    let right=Math.max(...piles);
    
    function eating_piles(k){
       let hours=0;
       for(let i=0;i<piles.length;i++){
           hours = hours + Math.ceil(piles[i]/k) ;
       }
       
       return hours <= h
    }
    
    while(left<right){
        let mid = Math.floor((left+right)/2);
        // console.log(mid)
        if(eating_piles(mid)){
            right=mid;
        }else{
            left=mid+1
        }
        
    }
    return left;
    }
}
