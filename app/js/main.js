$(function () {
   
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    focusOnSelect: true,
    swipe: true,
    autoplay: true
  });

  $('.new-collection__slider').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
  
  $('.new-collection__slider-clone').slick({
    arrows: false,
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 5,
  });
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.lvingroom'
    }
  });

  const tel = document.getElementsByClassName('contacts__tel');
  tel.style.color = "#5A5A5A";

  $('.article__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
  });
  
});