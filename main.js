let hamburger =document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    let navb= document.querySelector(".links")
    navb.classList.toggle("active")
    let navli=document.querySelectorAll("a")
    for(let i=0; i<navli.length;i++){
        navli[i].addEventListener("click", function (){
            navb.classList.remove("active");
            hamburger.classList.remove("active");
        })
    }
})
