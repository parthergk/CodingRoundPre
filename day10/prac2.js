/**
 * 51. Filter Products by Search Query
 * 
 * Problem Description:
 * Given an array of product objects, each containing a `name`.
 * Filter the array to find all products whose names contain the given `search` query.
 * The search should be case-insensitive.
 * 
 * Example 1:
 * Input:
 * products = [
 *   { name: "Laptop" },
 *   { name: "Mouse" },
 *   { name: "Keyboard" },
 *   { name: "Monitor" }
 * ]
 * search = "mo"
 * Output: [
 *   { name: "Mouse" },
 *   { name: "Monitor" }
 * ]
 * 
 * Constraints:
 * - The comparison should be case-insensitive.
 */
const products = [
  { name: "Laptop" },
  { name: "Mouse" },
  { name: "Keyboard" },
  { name: "Monitor" }
];

const search = "mo";

const output = products.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

console.log("OutPut", output);
