
/*Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.*/
let counter = 0;
function callStackSize() {
    counter++
    return callStackSize();
}

try {
    callStackSize()
} catch(e) {
    console.error("size of the stack is " + counter )
    console.error(e)
}


//TRAMPOLINING EXAMPLE
/**
 * Step One: write the recursive function.
 * 
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n.
 */
const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }
  
  /**
   * If we were to call the above with a number as
   * high as, say, 50,000, it would result in a stack
   * overflow.
   */
  
   /**
    * Step Two: modify the recursive function.
    * 
    * In order to trampoline the function, we must
    * return another function instead of calling
    * the recursive function itself. 
    * 
    * This prevents the function from being added 
    * directly to the call stack.
    */
   const facto = (n, a = 1) => {
     if (n === 0) return a;
     return () => facto(n - 1, n * a);
   }
  
   /**
    * Step Three: create a trampoline function.
    * 
    * This function takes another function and a list
    * of arguments, and uses a linear loop rather than
    * traditional recursion to handle the function calls.
    * 
    * This prevents the stack overflow, while still
    * maintaining the declarative approach provided by
    * recursive functions.
    */
   const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
  
  /**
   * Now, we can call the factorial function with as high
   * a number as we would like (as long as we don't run into
   * other errors, like exceeding MAX_SAFE_INTEGER, or looping
   * too many times...).
   * 
   * Unfortunately, both of these are the case here, but
   * the principle of trampolining holds!
   */
 //console.log(trampoline(facto(10000)))

//PART TWO
  /* Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
Once your recursive function is complete, trampoline it.*/

function flatten(arr) {
    if ()
}