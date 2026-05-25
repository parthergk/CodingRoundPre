/**
 * 42. Merge Two Objects
 * 
 * Problem Description:
 * Given two objects `obj1` and `obj2`, merge them into a single object where properties
 * from both objects are preserved. Do this using the object spread operator.
 * 
 * Example 1:
 * Input:
 * obj1 = { name: "Gaurav", age: 22 }
 * obj2 = { city: "Delhi", profession: "Developer" }
 * Output: { name: "Gaurav", age: 22, city: "Delhi", profession: "Developer" }
 * 
 * Constraints:
 * - If there are duplicate keys, the value from the last object overrides previous ones.
 */
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