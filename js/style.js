$(document).ready(function () {
  "use strict";

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI

  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

  $(".menu > ul > li").hover(function (e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  //If width is more than 943px dropdowns are displayed on hover

  $(".menu > ul > li").click(function () {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });

  $('.slide').bxSlider({
    mode: 'horizontal',
    captions: true,
    speed: 2000,
    auto: true,
  });
  

  // video slide
  const bg = [
    'https://i.esdrop.com/d/f/yFoph0cSQK/WAUa6qPE0e.png',
    'https://i.esdrop.com/d/f/yFoph0cSQK/tt3nDT1Vwu.png',
    'https://i.esdrop.com/d/f/yFoph0cSQK/HScWGB4tp1.png',
    'https://i.esdrop.com/d/f/yFoph0cSQK/NIk1h4uHcV.png',
    'https://i.esdrop.com/d/f/yFoph0cSQK/6rNtVhpOKl.png'
  ]
  
  const slides = document.querySelectorAll(".video");
  
  slides.forEach((slide, idx) => {
    slide.style.backgroundImage = `url("${bg[idx]}")`;
  
    slide.addEventListener("click", (e) => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
  
  // tab-menu 하단 
  let tabBtn = $('#info-btn > ul > li');
    let tabCont = $('#info-cont > section');

    tabBtn.click(function(){
        let target = $(this);
        let index = target.index();
        tabBtn.removeClass('info-active');
        target.addClass('info-active');
        tabCont.css('display', 'none');
        tabCont.eq(index).css('display','block');
        tabCont.addClass('info-active-bg');
    });

  // back to top
  function ts_browserWidth() {
    return $(window).width();
  }
  /*****
   * "Back to top" button
   *****/
  if($('#ts-back-to-top').length) {
    $(window).scroll(function(){
      if(ts_browserWidth() >= 720 || $('body').hasClas('ts-back-to-top-mobile')){
        if ($(window).scrollTop() >= 500){$('#ts-back-to-top').addClass('hello');}else{$('#ts-back-to-top').removeClass('hello');
      }}
    });
}


  
});