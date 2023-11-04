document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const logo = document.getElementById("logo");
    const text = document.getElementById("text");
    const content = document.querySelector("body");

    // Check if a cookie named "preloaderShown" exists
    const preloaderShown = getCookie("preloaderShown");

    if (!preloaderShown) {
        // Start with the preloader and its content fully visible
        preloader.style.transform = "translateY(0%)";
        logo.style.opacity = 1;
        text.style.opacity = 1;

        setTimeout(function () {
            // Slide out the preloader from the top
            preloader.style.transform = "translateY(-100%)";
            logo.style.opacity = 0;
            text.style.opacity = 0;

            // Allow scrolling after the preloader slides out
            content.style.overflow = "auto";
            
            // Set a cookie to indicate that the preloader has been shown
            setCookie("preloaderShown", "true", 365); // You can adjust the expiration period
        }, 4000); // Adjust the duration as needed
    } else {
        // If the cookie exists, hide the preloader immediately
        preloader.style.display = "none";
        content.style.overflow = "auto";
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}

// Function to get a cookie 
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}
