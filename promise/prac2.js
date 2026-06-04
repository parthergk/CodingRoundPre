const pro = new Promise((resolve, reject)=>{
    reject("Server Error");
})

pro.then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})