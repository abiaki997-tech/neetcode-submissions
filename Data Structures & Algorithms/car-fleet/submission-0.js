class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
          //fleet define
  //sort positions
  //hash-> {postion:time}
  //sort postions loop check last postion start
  //if
  
  let fleets=0;
  let position_time={};
  
  for(let i=0;i<position.length;i++){
      let distance = target - position[i];
      let spd=speed[i];
      let time=distance/spd;
      position_time[position[i]]=time
  }
//   console.log(position_time)
  
  let sort_postion=position.sort((a,b)=>a-b);
//   console.log(sort_postion)
   let time=0;
   for(let i=sort_postion.length-1;i>=0;i--){
       let position = sort_postion[i];
       console.log(position,0, position_time[position])
       if(position_time[position] > time  ){
           console.log("Asd")
           fleets++;
           time=position_time[position]
       }
   }
return fleets
    }
}
