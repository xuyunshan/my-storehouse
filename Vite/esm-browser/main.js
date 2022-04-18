import { filter } from "./node_modules/lodash-es/lodash.js";
const arr = [
  { name: "ys", age: 23 },
  { name: "zs", age: 22 },
];
const filterUsers = filter(arr, (user) => user.age > 22);
console.log(filterUsers);
console.log("maiin");
