/**
 * 57. Implement Debounce Function
 * 
 * Problem Description:
 * Write a debounce function that limits the execution of a given callback function `fun` 
 * until after a specified delay `dely` (in milliseconds) has elapsed since the last time 
 * the debounced function was invoked.
 * 
 * Example 1:
 * Input:
 * // Invoke the debounced function multiple times:
 * fun();
 * fun();
 * Output:
 * // Only one execution of the inner function takes place after 1000ms.
 * 
 * Constraints:
 * - Must use `setTimeout` and `clearTimeout` to delay execution and reset timers.
 */
function dbounce(fun, dely){

  let timer;

  return function (){
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      fun()
    }, dely);
  }
}

const fun = dbounce(()=>{
  console.log("hello");
  
}, 1000)

fun();
fun();