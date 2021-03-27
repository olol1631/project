
$(document).ready(function(){
  'use strct';
  //появление кнопки "вверх" при скролле
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
      if(scroll > 350) {
          $('.link-top').addClass('active');
      } else {
          $('.link-top').removeClass('active');
      }
  });

  //свернуть меню
  $('.menu-burger').click(function(event){
      $('.menu-burger,.menu__list').toggleClass('active');
      $('body').toggleClass('lock');
  });

  //изменить вид карточек товаров
  $('#line').click(function(event){
      $('.product__item').addClass('line');
      $('.icon-table').removeClass('active');
      $('.icon-line').addClass('active');
  });
  $('#table').click(function(event){
    $('.product__item').removeClass('line');
    $('.icon-line').removeClass('active');
    $('.icon-table').addClass('active');
  });

  //свернуть фильтр 
  $('.product__filter-title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(300);
  });    

  //slider
  new Swiper('.banner-container', {
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      effect: 'fade',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  new Swiper('.brands-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    breakpoints: {
      640:{
        slidesPerView: 4,
      },
      760: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 6,
      },
    }
      
  });
  new Swiper('.new-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640:{
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    }
  });      
  

  new WOW().init();
});
