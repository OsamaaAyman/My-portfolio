let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector(".overlay");
let navb = document.querySelector(".links");
let navli = document.querySelectorAll("a");
const removeNav = function () {
  overlay.classList.remove("active");
  navb.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.classList.remove("active");
};
hamburger.addEventListener("click", function () {

  hamburger.classList.toggle("active");
  navb.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.classList.toggle("active");

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
const skill = document.querySelector('.type')
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: .6
};
let f = 0;
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > options.threshold) {
      i = 0;
      if (!f) {
        var timer = setInterval(green, 700);
        f = 1
      }
    }
  });
}, options2)
observer2.observe(skill)

// start darkmode
let tog = 0;
let dark = document.querySelector('#darkmode')
dark.addEventListener("click", () => {
  document.body.classList.toggle('darkmode')
  tog = !tog;
})
const exp = document.querySelector('.type')
const options = {
  root: null,
  threshold: .6,
  rootMargin: '0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > options.threshold && !tog) {
      document.body.classList.add('darkmode');
      document.querySelector('.header').classList.add("active");
      document.querySelector('.header').classList.add("red");
    }
  });
}, options)
observer.observe(exp)

const ab = document.querySelector('#ab')
const about = document.querySelector('.about')
const options1 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !tog) {
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.add("active");
      document.querySelector('.header').classList.remove("red");
    }
  });
}, options1)
observer1.observe(about)
observer1.observe(ab)

const intro = document.querySelector('.social')
const options3 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting ) {
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.remove("active");
      removeNav();
    }
  });
}, options3)
observer3.observe(intro)

// end darkmode
