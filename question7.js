function compareArr(first , second){
    if (first.lenght === second.length) {
        let temp = true;
        for(let i=0 ; i < first.lenght ; i++){
            if(first[i] !== second [i])  temp = false;
        }
        return temp;
    } else {
        return false;
    }
}