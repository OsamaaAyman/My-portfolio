let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  let overlay = document.querySelector(".overlay");
  let navb = document.querySelector(".links");
  let navli = document.querySelectorAll("a");

  hamburger.classList.toggle("active");
  navb.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.classList.toggle("active");

  const removeNav = function () {
    overlay.classList.remove("active");
    navb.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("active");
  };
  overlay.onclick = function () {
    removeNav();
  };

  navli.forEach(li => li.addEventListener('click', removeNav));
});
