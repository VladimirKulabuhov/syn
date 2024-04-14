const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const greet = name => `Hello, ${name}!`;

grape + 18
const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueValues = array => [...new Set(array)];
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
