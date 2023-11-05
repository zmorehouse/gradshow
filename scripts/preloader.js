// This script is used to control the initial loading animation - it's used on the homepage. It utilises a cookie to check if the popup has been shown before or not. 
document.addEventListener("DOMContentLoaded", function () {  // Ensure the page content is loaded before running the function.

    // 1) Get the relevant page elements and store them in variables
    const preloader = document.querySelector(".preloader");
    const logo = document.getElementById("logo");
    const text = document.getElementById("text");
    const content = document.querySelector("body");

    // 2) Set some additional initial variables
    const preloaderShown = checkCookie("preloaderShown"); // To view the intro again (without the cookie), change this value to false.

    // 3 Check if the preloader has been shown before. If not, show it. If so, hide it.
    if (!preloaderShown) {
        preloader.style.transform = "translateY(0%)";
        logo.style.opacity = 1;
        text.style.opacity = 1;

        setTimeout(function () {
            preloader.style.transform = "translateY(-100%)";
            content.style.overflow = "auto";
            setCookie("preloaderShown", "true"); // Set the cookie to ensure the preloader is not shown again.
        }, 4000);
    }

    else {
        preloader.style.display = "none";
        content.style.overflow = "auto";
    }
});

// 6) Function to create and set a cookie. This is used to store whether the preloader has been shown or not.
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";expires=86400"; // Set the cookie with the provided name and value to expire in 1 day.
}

// 7) Function to check if a cookie exists. This is used to check if the preloader has been shown or not.
function checkCookie() {
    const cookies = document.cookie.split(";"); // Split the document cookies into an array
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith("preloaderShown=")) {
            const value = cookie.substring("preloaderShown=".length); // Check the value of the cookie
            // Dependent on its value, return the value of the cookie.
            if (value === "true") {
                return true;
            } else if (value === "false") {
                return false;
            }
            else {
                return false;
            }
        }
    }
}


