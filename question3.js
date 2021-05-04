function similarFinder(first, second) {
  let result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        result.push(first[i]);
      }
    }
  }
  let uniqueArr = [... new Set(result)];
  console.log(uniqueArr);
}

similarFinder(["ali", "reza", 1, 1], ["ali", true, 1, 1, 100]);
