var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
    var result = ((value * 9 / 5) + 32);
    return result; 
	
});

console.log(arrayOfFahrenheitValues);
