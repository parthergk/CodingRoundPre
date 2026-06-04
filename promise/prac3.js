Promise.resolve(10)
  .then(num => num * 2)
  .then(result => {
    console.log(result);
  });


async function nm() {
    const data = await Promise.resolve("Gaurav")
    console.log(data);
}
nm()

async function dbl() {
    const data = await Promise.resolve(50)
    console.log(data*2);
}
dbl()

