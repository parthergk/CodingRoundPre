function throttl(fun, delay){
    let thr = false;

    return function (arg){
        if (thr) return;

        fun(arg);
        thr = true

        setTimeout(() => {
            thr = false
        }, delay);
    }
}

const main = throttl((arg)=>console.log("throttling", arg), 2000)

main("hello")
main("hello, mohit")
main("hello, mohit how")