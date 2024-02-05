'use strict';

export const showHideNavItems = function () {
    const nav = document.getElementById("nav");
    const navICon = document.getElementById("navIcon");
    navICon.classList.remove(...navICon.classList);
    if (nav.className === "nav") {
        nav.className += " responsive";
        navICon.classList.add("fas", "fa-angle-double-up", "fa-2x");
    } else {
        nav.className = "nav";
        navICon.classList.add("fas", "fa-angle-double-down", "fa-2x");
    }
}