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