
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.featured-movie,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-item-title,.movie-list-item-desc");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})