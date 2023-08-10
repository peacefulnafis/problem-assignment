function matchFinder(string1, string2) {
  const checkString =
    typeof string1 === "string" && typeof string2 === "string";
  const result = string1.includes(string2);

  if (!checkString) {
    console.log("Two Input Must Be Same");
    return "Two Input Must Be Same";
  } else if (result) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

matchFinder("nafis", 12);
