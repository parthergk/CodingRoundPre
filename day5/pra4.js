/**
 * 22. Active User Purchase Metrics by City
 * 
 * Problem Description:
 * Given an array of user objects where each user contains `name`, `city`, `purchases` count, and `active` status.
 * Filter out inactive users (keep only `active === true`).
 * Group active users by their `city`. For each city, compute:
 * 1. `activeUsers`: Count of active users.
 * 2. `totalPurchases`: Sum of purchases by active users.
 * 3. `topBuyers`: Array of names of active users with the maximum purchases in that city.
 *    (Handle ties: if multiple active users share the maximum purchase count, include all of them).
 * Return an array of objects representing these aggregated metrics per city.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { name: "Gaurav", city: "Delhi", purchases: 5, active: true },
 *   { name: "Rahul", city: "Mumbai", purchases: 2, active: false },
 *   { name: "Amit", city: "Delhi", purchases: 8, active: true },
 *   { name: "Neha", city: "Bangalore", purchases: 4, active: true },
 *   { name: "Riya", city: "Delhi", purchases: 8, active: true },
 *   { name: "Karan", city: "Mumbai", purchases: 6, active: true }
 * ]
 * Output: [
 *   { city: "Delhi", activeUsers: 3, totalPurchases: 21, topBuyers: ["Amit", "Riya"] },
 *   { city: "Bangalore", activeUsers: 1, totalPurchases: 4, topBuyers: ["Neha"] },
 *   { city: "Mumbai", activeUsers: 1, totalPurchases: 6, topBuyers: ["Karan"] }
 * ]
 * 
 * Constraints:
 * - Each user contains `name` (string), `city` (string), `purchases` (number), and `active` (boolean).
 */
const users = [
  { name: "Gaurav", city: "Delhi", purchases: 5, active: true },
  { name: "Rahul", city: "Mumbai", purchases: 2, active: false },
  { name: "Amit", city: "Delhi", purchases: 8, active: true },
  { name: "Neha", city: "Bangalore", purchases: 4, active: true },
  { name: "Riya", city: "Delhi", purchases: 8, active: true },
  { name: "Karan", city: "Mumbai", purchases: 6, active: true },
];

const gruped = users
  .filter((item) => item.active === true)
  .reduce((acc, item) => {
    const key = item.city;

    if (!acc[key]) {
      acc[key] = {
        topPurchase: 0,
        activeUsers: 0,
        totalPurchases: 0,
        topBuyers: [],
      };
    }

      acc[key].activeUsers += 1;
      acc[key].totalPurchases += item.purchases;

      if (item.purchases > acc[key].topPurchase) {
        acc[key].topPurchase = item.purchases;
        acc[key].topBuyers = [item.name];
      } else if (item.purchases === acc[key].topPurchase) {
        acc[key].topBuyers.push(item.name);
      }
    return acc;
  }, {});

console.log(
  "Ouput",
  Object.keys(gruped).map((city) => ({
    city,
    activeUsers: gruped[city].activeUsers,
    totalPurchases: gruped[city].totalPurchases,
    topBuyers: gruped[city].topBuyers,
  })),
);
