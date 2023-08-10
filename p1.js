function cubeNumber(number) {
  if (typeof number === "number") {
    const result = Math.pow(number, 3);
    console.log(result);
    return result;
  } else {
    console.log("Input Must Be A Number");
    return "Input Must Be A Number";
  }
}

cubeNumber("abc");
