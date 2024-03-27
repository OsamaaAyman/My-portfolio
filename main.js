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

let sk=document.querySelectorAll('.sk');
let i=0;
const green = () => {
  sk.forEach((item) => {
    item.classList.remove("active");
  })
  sk[i].classList.add("active");
  i=i+1;
  i%=sk.length;
}
let timer = setInterval(green, 900);

var typed = new Typed(".job",{
  strings: ["Front-End Developer","Competitive Programmer","AI Model Tranier"],
  typeSpeed:60,
  backSpeed:60,
  loop:true,
})

let dark =document.querySelector('.logo')
dark.addEventListener("click",() =>{
  document.body.classList.toggle('darkmode')

})
