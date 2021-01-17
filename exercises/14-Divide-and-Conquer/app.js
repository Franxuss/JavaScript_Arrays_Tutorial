let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

mergeTwoList = (arr) => {
    var odd= [];
    var even = [];
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }else{
            even.push(arr[i])
        }
    }
    //console.log(odd);
   // console.log(even);
    return newArr.concat(odd,even);
// your code here
}

console.log(mergeTwoList(list_of_numbers))
