class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
            //hours
    //pile in array (each index no of banans)
    //finish each pile finish 1 hour speed 
    
    //
    let k_min=1;
    let k_max=Math.max(...piles);
    
    function eating_piles(k){
       let hours=0;
       for(let i=0;i<piles.length;i++){
           hours = hours + Math.ceil(piles[i]/k) ;
       }
       
       return hours <= h
    }
    
    for(let i=k_min;i<=k_max;i++){
        if(eating_piles(i)){
            return i
        }
    }
    }
}
