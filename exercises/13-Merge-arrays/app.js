var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for(i=0; i<chunk_one.length; i++){
        newArray.push(chunk_one[i])
    }
    for(i=0; i<chunk_two.length; i++){
        newArray.push(chunk_two[i])
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));