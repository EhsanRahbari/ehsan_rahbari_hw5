String.prototype.replaceAt = function (index, char) {
  if (char == "") {
    return this.slice(0, index) + this.substr(index + 1 + char.length);
  } else {
    return this.substr(0, index) + char + this.substr(index + char.length);
  }
};

function deleteFunction(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      // console.log("this is here");
      //   str[i] = ' ';
      str = str.replaceAt(i, "");
    } else if (str[i + 1] === str[i]) {
      // console.log(2 , str[i+1]);
      //   str[i + 1] = ' ';
      str = str.replaceAt(i + 1, "");
    } else if (str[i] === " ") {
      // console.log(3)
      if (str[i - 1] === str[i + 1]) {
        str = str.replaceAt(i + 1, "");
      }
    }
    // console.log(str);
  }
  console.log(str);
}

deleteFunction("progress report template elementary school");
