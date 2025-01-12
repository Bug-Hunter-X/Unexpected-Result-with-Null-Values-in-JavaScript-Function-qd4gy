function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect handling of null values
  }
  return a + b;
}

console.log(foo(null, 5)); //Outputs 0. Expected: an error or specific handling for null