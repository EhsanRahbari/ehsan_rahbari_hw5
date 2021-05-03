function findMaxInArray(arr){
    let temp = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > temp){
            temp = arr[i];
        }
    }
    console.log(temp);
}

findMaxInArray([1 , 23 , 56 , 45 , 33]);