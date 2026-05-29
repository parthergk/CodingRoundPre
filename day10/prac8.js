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