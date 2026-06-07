function fun(delay, fun){
    let timerid;
    return ()=>{
        clearTimeout(timerid)
        timerid = setTimeout(() => {
            fun()
        }, delay);
    }
}

const main = fun(1000, ()=>{
        console.log("hello");
    })

    main()