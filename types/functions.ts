// function add(n1: number, n2: number): number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// function printResult(num: number): void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// it is valid but combineValues is any and we want to avoid it
let combineValues;
combineValues = add;
combineValues(5, 12);

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 3, (result) => {
  console.log(result);
});

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// Utility function which build error function
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occured", 500);
