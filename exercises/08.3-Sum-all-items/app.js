function sumTheElements(theArray){
	
	var total = 0;
	
    for(var i = 0; i < theArray.length; i++){
        var element = theArray[i];
        total += element;}

	return total;
}
console.log(sumTheElements([2,13,34,5]))