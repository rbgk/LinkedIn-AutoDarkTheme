// Values of cookie constants work until LinkedIn changes it
// Modify the expire time to your liking
const themeCookieName = "li_theme";
const themeCookieValue = "dark";
const cookieDomain = ".www.linkedin.com";
const expireTime = 365;

// Get cookie value to see if we need to change it
function getCookie(key) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Setting a cookie
function setCookie(key, value, days, domain) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    const domainStr = domain ? "; domain=" + domain : "";
    document.cookie = `${key}=${value || ""}${expires}; path=/${domainStr}`;
}


// Upon visit to LinkedIn:
if (getCookie(themeCookieName) != "dark") {
    setCookie(themeCookieName, themeCookieValue, expireTime, cookieDomain); 
}