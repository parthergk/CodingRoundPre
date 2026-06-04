const pro = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Welcome Gaurav")
    }, 2000);
})

pro.then((rslt)=>{
console.log(rslt);
}).catch((err)=>{
    console.log(err);
    
})