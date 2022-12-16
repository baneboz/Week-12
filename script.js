"use script";

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
