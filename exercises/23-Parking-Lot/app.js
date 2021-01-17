let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(matrix){
    var totalSlots=0;
    var availableSlots=0;
    var occupiedSlots=0;
    for(var i=0; i < parking_state.length; i++){
        for(var j=0; j<parking_state[i].length; j++){
            if(parking_state[i][j]===1)
                occupiedSlots++;
            
            if(parking_state[i][j]===2)
                availableSlots++;
            
            if(parking_state[i][j]!==0)
            totalSlots++;
            
        }
        
    
    }
    const state = {'totalSlots':totalSlots, 'availableSlots': availableSlots, 'occupiedSlots':occupiedSlots};
           
    return state;
    

}
console.log(getParkingLotState(parking_state))