//menu animation 

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const lines = document.querySelectorAll('.line'); // 

function toggleMenu() {
  hamburger.classList.toggle('active')
  openMenu()
  burgerCol()
};

function openMenu(){
  mobileNav.classList.toggle('translated');
}

function burgerCol(){
  lines.forEach(line => line.classList.toggle('active')); 
}

hamburger.addEventListener('click', toggleMenu);






