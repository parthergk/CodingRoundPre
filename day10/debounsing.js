/**
 * Practice: Implement Debounce Function (Alternate Signature)
 * 
 * Problem Description:
 * Write a debounce function that accepts the delay first and the callback function second.
 * The returned debounced function should delay execution until the specified delay has passed since the last invocation.
 * 
 * Example 1:
 * Input:
 * // Invoke the debounced function:
 * fun();
 * Output:
 * // Only one execution of the inner function takes place after the delay.
 * 
 * Constraints:
 * - Use `setTimeout` and `clearTimeout`.
 */
function deb(dely, fun) {
    let timer;
    
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        }, dely);
    }
}

const fun = deb(1000, ()=>{
    console.log("hello");
})

fun();