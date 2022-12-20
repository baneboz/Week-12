"use strict";

// External JS Files
// ● Include an external JS script on the page.
// ● The script should contain a function that uses console.log to print something.
// ● Trigger that function.
function sayHiExternal() {
  console.log("Hi from external file!");
}

// fully loaded page
document.addEventListener("load", sayHiExternal());

// BOM (Window object)
// window.navigator
// Create a function that prints out in the console the following information
// ● the platform on which the browser is running
// ● the information about the browser version
// ● the company that created that browser
// Each piece of information should be printed out in a new row.
// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.
const printInfo = function () {
  console.log(
    `The platform on which the browser is running: ${window.navigator.userAgentData.platform}\nThe information about the browser version: ${window.navigator.userAgentData.brands[2].version}\nThe company that created that browser: ${window.navigator.vendor}`
  );
};
printInfo();

const isOnline = function () {
  if (window.navigator.onLine) console.log("online");
  else console.log("offline");
};
isOnline();

// window.screen
// Create a function that prints out the following information in the console:
// ● current browser width and height
// ● max possible browser height
const screenInfo = function () {
  console.log(
    `Current browser width and height: ${window.innerWidth} x ${window.innerHeight}\nMax possible browser height: ${window.screen.height}`
  );
};
screenInfo();

// window.location
// Write a function that prints out website’s url information in the console:
// ● full url address
// ● domain name
// ● used protocol
// ● parameters which are part of URL.
const printUrl = function () {
  console.log(
    `Full url address: ${window.location.href}\nDomain name: ${window.location.hostname}\nused protocol: ${window.location.protocol}\nParameters which are part of URL: ${window.location.search}`
  );
};
printUrl();
// Create a function for reloading the page.
const reloadPage = function () {
  window.location.reload();
};
document.querySelector(".reload").addEventListener("click", reloadPage);

// Create a function that redirects you to a website address passed to it.
const redirectToWebsite = function (page) {
  window.location.href = page;
};
document.querySelector(".redirect").addEventListener("click", function () {
  redirectToWebsite("https://google.com");
});

// window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.
// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.
// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.

const setLocalStorage = function (key, value) {
  window.localStorage.setItem(key, value);
};
const getLocalStorage = function (key) {
  const localStorageData = window.localStorage.getItem(key);
  if (localStorageData) console.log(localStorageData);
  else console.log("There is no data");
};
const clearLocalStorage = function () {
  window.localStorage.clear();
};

setLocalStorage("name", "bane boz");

getLocalStorage("name");
getLocalStorage("ime"); // there is no data

clearLocalStorage();

const setSessionStorage = function (key, value) {
  window.sessionStorage.setItem(key, value);
};

const getSessionStorage = function (key) {
  const sessionStorageData = window.sessionStorage.getItem(key);
  if (sessionStorageData) console.log(sessionStorageData);
  else console.log("There is no data");
};

const clearSessionStorage = function () {
  window.sessionStorage.clear();
};

setSessionStorage("age", 35);

getSessionStorage("age");
getSessionStorage("godine"); // there is no data

clearSessionStorage();

// window.history
// Play around with the browser forward/back navigation. Implement a function that navigates two pages back.
const gotTwoPagesBack = function () {
  window.history.back(2);
};

document.querySelector(".back").addEventListener("click", gotTwoPagesBack);

// Window Methods
// ● Create a function that shows the user a greeting message using alert
// ● Then a question is presented to the user using prompt
// ● When the user provides the answer, that answer is used in the confirm dialog
// ● The format of the message in the dialog should be:"We will submit this answer now!" + the answer
// ● If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

const greetingMsg = function () {
  alert("Hello, user!");
};

const questionMsg = function () {
  let answer = "";
  do {
    answer = prompt("How shall we call you?");
  } while (!answer);

  return answer;
};

const confirmMsg = function (userAnswer) {
  const confirmed = confirm(`We will submit this answer now! ${userAnswer}`);
  if (confirmed) alert("Answer submited successfully");
};

const messagesToUser = function () {
  greetingMsg();
  const userAnswer = questionMsg();
  confirmMsg(userAnswer);
};
document.querySelector(".alert").addEventListener("click", messagesToUser);

// Global JavaScript Objects (homework)
// Math
// ● Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.
const createArr10Under50 = function () {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.random() * 50 + 1);
  }
  return arr;
};
console.log(createArr10Under50());

// ● Round
// Create a function that uses the passed array of numbers and rounds all its
// elements to two decimals. Print out the modified array in the console.
// Use the first function for generating the input array.
const roundTo2Decimals = function (arr) {
  const roundedArr = [];
  for (let i = 0; i < arr.length; i++) {
    roundedArr[i] = Math.round(arr[i] * 100) / 100;
  }
  console.log(roundedArr);
  return roundedArr;
};
const arrForInput = createArr10Under50();
roundTo2Decimals(arrForInput);

// ● Floor
// Create a function that uses the passed array of numbers and rounds all its
// elements to the nearest integer. Print out the modified array in the console.
// Use the first function for generating the input array.
const floorArr = function (arr) {
  const roundedArr = [];
  for (let i = 0; i < arr.length; i++) {
    roundedArr[i] = Math.floor(arr[i]);
  }
  console.log(roundedArr);
  return roundedArr;
};
const anotherArrForInput = createArr10Under50();
floorArr(anotherArrForInput);

// ● Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.
const getMaxNum = arr => console.log(`Max num in array: ${Math.max(...arr)}`);
getMaxNum([1, 4, 10, 4]);

// Date
// ● Print out the whole date object in the console.
// ● Print out the current time in the console.
// ● Print out the current date in the console.
const getCurrentDate = function () {
  const currentDate = new Date();
  return currentDate;
};
const printCurrentTime = function () {
  const currentDate = getCurrentDate();
  const h = currentDate.getHours();
  const m = currentDate.getMinutes();
  const currentTime = `${h}:${m}`;
  console.log("Current time is: " + currentTime);
  return currentTime;
};
const printCurrentDate = function () {
  const currentDate = getCurrentDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const curentDate = `${day}/${month}/${year}`;
  console.log("Current date is: " + curentDate);
  return curentDate;
};
console.log(getCurrentDate());
printCurrentTime();
printCurrentDate();

// BUILT IN OBJECTS
// Try to use built-in object methods to solve some of the problems here
console.log("============== Built in objects ============");
// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
const duplicateElements = function (arr) {
  const duplicateArr = arr.flatMap(el => [el, el]);
  console.log(duplicateArr);
  return duplicateArr;
};
duplicateElements([2, 4, 7, 11, -2, 1]);

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
const removeDuplicates = function (arr) {
  const arrUnique = [...new Set(arr)];
  console.log(arrUnique);
  return arrUnique;
};
removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// a
const isOddArr = function (arr) {
  if (arr.length % 2 !== 0) return true;
  else return false;
};
console.log(isOddArr([1, 2, 9, 2]));

// b
const countLessThanMid = function (arr) {
  const isOdd = isOddArr(arr);
  if (isOdd) {
    const lessThanMid = Math.trunc(arr.length / 2) + 1;
    console.log(lessThanMid);
    return lessThanMid;
  } else {
    console.log("Error message, array is even");
    return false;
  }
};
countLessThanMid([-1, 8.1, 3, 6, 2.3, 44, 2.11]);

// 4. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
const getSmallest = function (arr) {
  const smallest = {
    minValue: 0,
    minLastIndex: 0,
  };
  smallest.minValue = Math.min(...arr);
  smallest.minLastIndex = arr.lastIndexOf(smallest.minValue);
  return smallest;
};
console.log(getSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
const getSmaller = function (arr, limit) {
  const result = arr.filter(function (el) {
    return el < limit;
  });
  return result;
};
console.log(getSmaller([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
const getPro = function (arr) {
  const lowerArr = arr.filter(function (el) {
    return el.toLowerCase().startsWith("pro");
  });
  return lowerArr;
};
console.log(getPro(["JavaScript", "Programming", "fun", "product"]));

// c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.
const filterFunc = function (arr, callbackFn) {
  const filteredArr = callbackFn(arr);
  console.log(filteredArr);
};
filterFunc(
  ["Programming", "Proffesional", "Amateur", "fun", "product"],
  getPro
);

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.
const shoppingList = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
  { name: "eggs", price: 120 },
  { name: "potato", price: 140 },
];

// b. Write a function that calculates the total price of your shopping list.
const calcTotalPrice = function (list) {
  const sum = list.reduce(function (acc, el) {
    return acc + el.price;
  }, 0);
  return sum;
};
console.log(calcTotalPrice(shoppingList));

// c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
const calcAvgPrice = function (list) {
  const avgPrice = calcTotalPrice(list) / list.length;
  // console.log(Math.round(avgPrice * 1000) / 1000); // only if necessary
  console.log(avgPrice.toFixed(3)); // always on 3 dec
  return avgPrice;
};
calcAvgPrice(shoppingList);

// d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.
const getMostExpensive = function (list) {
  let mostExpPrice = list[0].price;
  let mostExpName = list[0].name;

  list.forEach(function (el) {
    if (el.price > mostExpPrice) {
      mostExpPrice = el.price;
      mostExpName = el.name;
    }
  });
  console.log(mostExpName.toUpperCase());
  return mostExpName;
};
getMostExpensive(shoppingList);

// 7.
// a. Write a function that checks if a given string is written in all capitals.
const isAllCapital = function (str) {
  const regexAllCaps = /^[A-Z]*$/;
  if (regexAllCaps.test(str)) return true;
  else return false;
};

// b. Write a function that checks if a given string contains any digits.
const isContainDigits = function (str) {
  const regexDigits = /[0-9]/;
  if (regexDigits.test(str)) return true;
  else return false;
};

// c. Write a function that checks if a given string is a valid hexadecimal color.
const isHex = function (str) {
  const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (regexHex.test(str)) return true;
  else return false;
};

// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.
const isBetween1900and2018 = function (num) {
  if (num >= 1900 && num <= 2018) return true;
  else return false;
};

// e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
const validator = function () {
  const validatorObj = {
    isAllCapital,
    isContainDigits,
    isHex,
    isBetween1900and2018,
  };
  return validatorObj;
};
const validate = validator();
console.log(validate.isHex("#090099"));

// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

const daysUntilBirthday = function (birthday) {
  const now = Date.now();

  let thisYear = new Date().getFullYear();
  let birthdayDate = new Date(birthday + thisYear).getTime();

  if (Math.round((now - birthdayDate) / (1000 * 60 * 60 * 24)) === 0) {
    console.log("Today is your birthday!");
    return;
  }
  if (birthdayDate > now) {
    console.log(
      `${Math.round((birthdayDate - now) / (1000 * 60 * 60 * 24))} days!`
    );
  }

  if (birthdayDate < now) {
    // if passed for next year
    // thisYear++;
    // birthdayDate = new Date(birthday + thisYear).getTime();

    // if passed
    console.log(
      `Your birthday was ${Math.abs(
        Math.round((birthdayDate - now) / (1000 * 60 * 60 * 24))
      )} days ago!`
    );
  }
};

daysUntilBirthday("19 December");

// 9. Write a function that for a given departure and arrival time calculates the time the trip takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds
const calcTripTime = function (departure, arrival) {
  const departureTime = new Date("12/20/2022 " + departure).getTime();
  const arrivalTime = new Date("12/20/2022 " + arrival).getTime();

  let tripTimeMs = arrivalTime - departureTime;

  if (tripTimeMs < 0) {
    tripTimeMs += 86400000;
  }

  let tripTimeSc = Math.round(tripTimeMs / 1000);
  let tripTimeMn = Math.round(tripTimeSc / 60);
  let tripTimeHr = Math.round(tripTimeMn / 60);

  tripTimeSc = tripTimeSc % 60;
  tripTimeMn = tripTimeMn % 60;

  console.log(
    `${tripTimeHr} hours ${tripTimeMn} minutes ${tripTimeSc} seconds`
  );
};
calcTripTime("18:22:13", "11:43:22");

// 10.
// a. Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

// 11.
// a. Write a function that generates a random integer value between 5 and 20.
const getBetween5and20 = function () {
  return Math.trunc(Math.random() * (21 - 5) + 5);
};
getBetween5and20();

// b. Write a function that generates a random integer value between 50 and 100.
const getBetween50and100 = function () {
  return Math.trunc(Math.random() * (101 - 50) + 50);
};
getBetween50and100();

// c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.
const generateArr = function (num, callbackFn) {
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(callbackFn());
  }

  console.log(result);
  return result;
};
generateArr(13, getBetween50and100);

// 12. Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
  return arr;
}
shuffleArr([3, 6, 11, 2, 9, 1]);
