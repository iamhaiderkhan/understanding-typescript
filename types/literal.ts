function combine(
  input1: number | string,
  input2: number | string,
  resultType: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAge = combine(34, 56, "as-number");
console.log(combineAge);

const combineStringAge = combine(34, 56, "as-number");
console.log(combineStringAge);

const combineName = combine("Haider", "Khan", "as-text");
console.log(combineName);
