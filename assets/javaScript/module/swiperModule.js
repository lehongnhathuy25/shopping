
const  swiperIns = document.querySelector('.swiperIns')
export default function swiper(){
    var swiper = new Swiper(swiperIns, {
        slidesPerView: 2,
        spaceBetween: 6,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          loop:true,
        },
        breakpoints: {
          // when window width is <= 499px
         
          // when window width is <= 999px
          1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
          1025: {
              slidesPerView: 4,
              spaceBetweenSlides: 40
          }
      }
      });
}
