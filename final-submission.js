function cubeNumber(number) {
  if (typeof number === "number") {
    const result = Math.pow(number, 3);
    // console.log(result);
    return result;
  } else {
    // console.log("Input Must Be A Number");
    return "Input Must Be A Number";
  }
}

function matchFinder(string1, string2) {
  const checkString =
    typeof string1 === "string" && typeof string2 === "string";
  const result = string1.includes(string2);

  if (!checkString) {
    // console.log("Two Input Must Be Same");
    return "Two Input Must Be Same";
  } else if (result) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}

function sortMaker(arr) {
  const [n1, n2] = arr;
  const isInvalidInput = n1 >= 0 && n2 >= 0;
  const isEqual = n1 == n2;

  if (isEqual) {
    // console.log("equal");
    return "equal";
  } else if (isInvalidInput) {
    const sortCompare = arr.sort((n1, n2) => n2 - n1);
    // console.log(sortCompare);
    return sortCompare;
  } else {
    // console.log("Invalid Input");
    return "Invalid Input";
  }
}

function findAddress(obj) {
  const { street = "__", house = "__", society = "__" } = obj;

  // console.log(`${street},${house},${society}`);
  return `${street},${house},${society}`;
}

function canPay(changeArray, totalDue) {
  const checkArray = changeArray.length !== 0;

  if (checkArray) {
    const sum = changeArray.reduce((acc, cur) => (acc += cur));
    const result = sum >= totalDue;
    // console.log(result);
    return result;
  } else {
    // console.log("Empty Array Is Not Accepted");
    return "Empty Array Is Not Accepted";
  }
}
