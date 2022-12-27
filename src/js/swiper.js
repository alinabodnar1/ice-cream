const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  autoHeight: true,
  speed: 1200,
  
  autoplay: {
    disableOnInteraction: false,
  },
});