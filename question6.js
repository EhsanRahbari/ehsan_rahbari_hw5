String.prototype.replaceAt = function (index, char) {
  if (char == "") {
    return this.slice(0, index) + this.substr(index + 1 + char.length);
  } else {
    return this.substr(0, index) + char + this.substr(index + char.length);
  }
};


function deletingVowels(str){
    let vowels = ['a' , 'e', 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U'];
    for(let i=0;i < str.length ; i++){
        for(let j=0;j < vowels.length ; j++){
            if(str[i] === vowels[j]){
                str = str.replaceAt(i , '');
            }
        }
    }
    console.log(str);
}

deletingVowels("hello world");