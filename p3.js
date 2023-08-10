function sortMaker(arr) {
  const [n1, n2] = arr;
  const isInvalidInput = n1 >= 0 && n2 >= 0;
  const isEqual = n1 == n2;

  if (isEqual) {
    console.log("equal");
    return "equal";
  } else if (isInvalidInput) {
    const sortCompare = arr.sort((n1, n2) => n2 - n1);
    console.log(sortCompare);
    return sortCompare;
  } else {
    console.log("Invalid Input");
    return "Invalid Input";
  }
}

sortMaker([2, -2]);
