// // Q1

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// Array.prototype.myMap = function (callback) {
//     let result = [];

//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// Array.prototype.myFilter = function (callback) {
//     let result = [];

//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// const nums = [1, 2, 3, 4, 5];

// nums.myForEach(n => console.log(n));

// console.log(nums.myMap(n => n * 2));

// console.log(nums.myFilter(n => n % 2 === 0));

//Q2 

// function groupBy(array, key) {

//     return array.reduce((result, item) => {
//         const group = item[key] ?? "unknown";

//         if (!result[group]) {
//             result[group] = [];
//         }

//         result[group].push(item);
//         return result;

//     }, {});
// }
// const products = [
//     { name: "iPhone", category: "Mobile", price: 70000 },
//     { name: "Samsung", category: "Mobile", price: 55000 },
//     { name: "MacBook", category: "Laptop", price: 120000 },
//     { name: "Dell", category: "Laptop", price: 80000 },
//     { name: "AirPods", category: "Audio", price: 15000 }
// ];

// const groupedProducts = groupBy(products, "category");

// console.log(groupedProducts);


// Q3

