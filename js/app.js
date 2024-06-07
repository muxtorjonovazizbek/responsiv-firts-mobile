let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".nav__bar__btn");
let headerList = document.querySelector(".nav__link__items");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("nav__list-show");
})