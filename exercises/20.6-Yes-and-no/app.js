let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

var myArr = theBools.map(function(value){
    if(value === 0){
        return 'woko';
    }else{
        return 'wiki';
    }
})
console.log(myArr)