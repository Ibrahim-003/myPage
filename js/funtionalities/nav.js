const d = document;

export default function mobilenav1(toggler, open, close, nav, link) {
  let $nav = d.querySelector(nav);
  let $open = d.querySelector(open);
  let $close = d.querySelector(close);

  d.addEventListener("click", (e) => {
    if (e.target.matches(toggler) || e.target.matches(`${toggler} *`)) {
      $open.classList.toggle("header__togglerIcon--active");
      $close.classList.toggle("header__togglerIcon--active");
      $nav.classList.toggle("navMobile--active");
    }

    if (e.target.matches(link) || e.target.matches(`${link} *`)) {
      $close.classList.toggle("header__togglerIcon--active");
      $open.classList.toggle("header__togglerIcon--active");
      $nav.classList.toggle("navMobile--active");
    }
  });
}
