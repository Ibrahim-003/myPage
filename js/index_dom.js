import mobilenav from "./funtionalities/nav.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  mobilenav(
    ".header__toggler",
    "#nav-mobile__open",
    "#nav-mobile__close",
    ".navMobile",
    ".navMobile__link"
  );
});
