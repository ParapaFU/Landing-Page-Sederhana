function customHomeHeight() {
  const navbar = $("#navbar");
  const home = $("#home");

  console.log(navbar.outerHeight());

  const navbarHeight = navbar.outerHeight();

  home.css("height", `calc(100vh - ${navbarHeight}px)`);
}

window.addEventListener("resize", customHomeHeight);
window.addEventListener("load", customHomeHeight);
