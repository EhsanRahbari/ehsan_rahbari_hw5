function Draw(str, num) {
  let rows = num;
  for (let i = 1; i <= rows; i++) {
    for (let k = 1; k <= rows - i; k++) {
      document.write("&nbsp");
    }
    for (let j = 1; j <= i; j++) {
      document.write(str + " ");
    }
    document.write("<br/>");
  }
}


Draw('*' , 7)