let library = {
    title:"this book",
    author:"author",
    readingStatus: true
}
function stringMaker(arr){
    let finalStr = "";
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].readingStatus){
            finalStr += `Already read '${arr[i].title}' by ${arr[i].author}. `;
        }else {
            finalStr += `You still need to read '${arr[i].title}' by ${arr[i].author}.`;
        }
    }
    console.log(finalStr);
}
// let​ library ​ = [{ ​title​ :" The Road Ahead​ ",​ author​ :" ​ Bill Gates​ ",​ readingStatus​:true​ }];
console.log(library)
// stringMaker(library);