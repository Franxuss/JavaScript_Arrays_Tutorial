var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
var numMayor = 0;

for(var i=0; i<myArray.length; i++){
    
    if(myArray[i]>numMayor){
        numMayor=myArray[i];
}

}
console.log(numMayor);