const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
let list = document.querySelector(".slider .list");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

document.addEventListener("DOMContentLoaded", function () {
  if (document.title === "Gallery" || "Community") {
    document.body.classList.add("gallery-page" || "community-page" );
}

  
});

next.addEventListener('click', function (){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function (){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})

if (list) {
  let items = document.querySelectorAll(".slider .list .item");
  let dots = document.querySelectorAll(".slider .dots li");
  let active = 0;
  let lengthItem = items.length - 1;

  function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    if (lastActiveDot) {
      lastActiveDot.classList.remove("active");
    }
    if (dots[active]) {
      dots[active].classList.add("active");
    }
  }
  dots.forEach((li, key) => {
    li.addEventListener("click", function () {
      active = key;
      reloadSlider();
    });
  });
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Toggle button clicked");
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });
}