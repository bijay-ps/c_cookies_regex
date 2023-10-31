function squareAndPrint(n) {
  let result;
  result = multiplyByItself(n);
  printResult(result);
}

function multiplyByItself(n) {
  return n * n;
}

function printResult(n) {
  console.log(n);
}

squareAndPrint(2);
squareAndPrint(5);
