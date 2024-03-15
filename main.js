let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  let overlay = document.querySelector(".overlay");
  let navb = document.querySelector(".links");
  let navli = document.querySelectorAll("a");

  hamburger.classList.toggle("active");
  navb.classList.toggle("active");
  overlay.classList.toggle("active");

  if(navb.classList.contains('active')){
    document.body.style.position = 'fixed'
  }

  const removeNav = function () {
    overlay.classList.remove("active");
    navb.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.position = 'static'
  };
  overlay.onclick = function () {
    removeNav();
  };
  
  navli.forEach(li => li.addEventListener('click', removeNav));
});
