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
