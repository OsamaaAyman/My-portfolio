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




// start darkmode
let tog = 0;
let dark = document.querySelector('#darkmode')
dark.addEventListener("click", () => {
  document.body.classList.toggle('darkmode')
  tog = !tog;
})
const exp = document.querySelector('.type')
const contact = document.querySelector('.contact')
const proj = document.querySelectorAll('.bord')
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
observer.observe(contact)
proj.forEach((pro) => observer.observe(pro))


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
      document.querySelector('.header').classList.add("active");
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.remove("red");
    }
  });
}, options1)
observer1.observe(about)
observer1.observe(ab)

const intro = document.querySelector('.stop')
const options3 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.remove("active");
      removeNav();
    }
  });
}, options3)
observer3.observe(intro)

// end darkmode
//animation

const options5 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      about.classList.add("active");
      setTimeout(function(){document.querySelectorAll('.section').forEach(section => section.classList.add('active'))},500)
      setTimeout(function(){document.querySelectorAll('.section').forEach(section => section.classList.add('op'))},600)

    }
  });
}, options5)
observer5.observe(about)

let bord = document.querySelectorAll('.bord');
let j = 0;
let f2=0;
const flipp = () => {
  bord.forEach((item) => {
    item.classList.remove("active");
  })
  bord[j].classList.add("active");
  j = j + 1;
  j %= bord.length;
}
const projects=document.querySelector(".proj");
const flip = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > options.threshold) {
      j = 0;
      if (!f2) {
        var timer = setInterval(flipp, 1700);
        f2 = 1
      }
    }
  });
}, options)
flip.observe(projects)

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