const obj1 = {
  name: "Gaurav",
  age: 22
};

const obj2 = {
  city: "Delhi",
  profession: "Developer"
};

const obj = {...obj1, ...obj2};

console.log("Object", obj);