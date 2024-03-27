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


var typed = new Typed(".job", {
  strings: ["Front-End Developer", "Competitive Programmer", "AI Model Tranier"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
})

let dark = document.querySelector('.logo')
dark.addEventListener("click", () => {
  document.body.classList.toggle('darkmode')

})

let sk = document.querySelectorAll('.sk');
let i = 0;
const green = () => {
  sk.forEach((item) => {
    item.classList.remove("active");
  })
  sk[i].classList.add("active");
  i = i + 1;
  i %= sk.length;
}
const skill = document.querySelector('.skills')
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: .6
};
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > options.threshold) {
      var timer = setInterval(green, 900);
      observer2.unobserve(entry)
    }

  });
}, options2)
observer2.observe(skill)

// start darkmode
const exp = document.querySelector('.skills')
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .3
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.add('darkmode');
    }
  });
}, options)
observer.observe(exp)

const about = document.querySelector('.about')
const options1 = {
  root: null,
  rootMargin: '0px',
  threshold: .1
};
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.remove('darkmode');
    }
  });
}, options1)
observer1.observe(about)

// end darkmode
