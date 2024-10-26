$(function () {
  $('.js-hero-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    focusOnSelect: true,
    swipe: true,
    autoplay: true
  });

  $('.js-collection-slider').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
  
  $('.js-collection-slider-v2').slick({
    arrows: false,
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 5,
  });

  $('.js-article-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.lvingroom'
    }
  });

  const tel = document.getElementsByClassName('contacts__tel');
  
  for (let i = 0; i < tel.length; i++) {
    tel[i].style.color = "#5A5A5A";
  }

  $('.article__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
  });
});
