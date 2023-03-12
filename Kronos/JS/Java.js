// JavaScript Document
// MainNav
$(window).on('scroll',function () {
  if($(window).scrollTop()) {
    $('#MainNav').addClass('black');
  }
  else {
    $('#MainNav').removeClass('black');
  }
})

//BurgerNav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks =document.querySelectorAll('.nav-links li');

//ToggleNav
  burger.addEventListener('click',() => {
      //ToggleNav
      nav.classList.toggle('nav-active');
  //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
         }
      });
  });
}

navSlide();
