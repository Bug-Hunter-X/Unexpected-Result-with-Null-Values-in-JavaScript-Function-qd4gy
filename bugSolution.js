function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed"); //Improved error handling
  }
  return a + b;
}

console.log(foo(null, 5)); // Throws an error
console.log(foo(5, 10)); //Outputs 15