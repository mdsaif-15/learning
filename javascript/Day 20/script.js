// Q1
const nums = [1, 2, 3, 4, 5]
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i, this)
    }
}
// console.log(myForEach(arr * 2));

// nums.myForEach(n => console.log(n))

Array.prototype.myMap = function (callback) {
    result = []
    for (let i = 0; i <= this.length - 1; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}
// nums.myMap(n => console.log(n * 2))

Array.prototype.myfilter = function (callback) {
    result = []
    for (let i = 1; i <= this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// console.log(nums.myFilter(n => n % 2 === 0));

const products = [
    { name: "iPhone", category: "Mobile", price: 70000 },
    { name: "Samsung", category: "Mobile", price: 55000 },
    { name: "MacBook", category: "Laptop", price: 120000 },
    { name: "Dell", category: "Laptop", price: 80000 },
    { name: "AirPods", category: "Audio", price: 15000 },
];

function groupBy(array, key) {
    result = {}
    for (let i = 0; i < array.length; i++) {
        if (array.key === key) {
            result = array[i]
        }
        else {
            result = array[i]
        }
    }
    return result;
}
// console.log(groupBy(products, "Audio"))

const arr = [1, [2, [3, [4, [5]]]], [6, 7]];

function deepFlatten(arr) {
    arr.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val) : val), 
        []
    );
};
console.log(deepFlatten(arr)); // [1, 2, 3, 4, 5, 6, 7]