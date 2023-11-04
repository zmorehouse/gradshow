document.addEventListener("DOMContentLoaded", function () { 
    const preloader = document.querySelector(".preloader");
    const logo = document.getElementById("logo");
    const text = document.getElementById("text");
    const content = document.querySelector("body");

    const preloaderShown = getCookie("preloaderShown");

    if (!preloaderShown) {
        preloader.style.transform = "translateY(0%)";
        logo.style.opacity = 1;
        text.style.opacity = 1;

        setTimeout(function () {
            preloader.style.transform = "translateY(-100%)";
            logo.style.opacity = 0;
            text.style.opacity = 0;

            content.style.overflow = "auto";
            
            setCookie("preloaderShown", "true", 365); 
        }, 4000); 
    } else {
        preloader.style.display = "none";
        content.style.overflow = "auto";
    }
});

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}

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
