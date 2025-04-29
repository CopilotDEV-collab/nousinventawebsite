import { Component } from '@angular/core';
declare var Swiper: any;
declare var $: any;

@Component({
  selector: 'app-casestudies',
  imports: [],
  templateUrl: './casestudies.component.html',
  styleUrl: './casestudies.component.scss'
})
export class CasestudiesComponent {
  ngAfterViewInit() {
    let ab;
    setTimeout(()=>{
      ab = new Swiper("#swiper-reviews-case",{
        slidesPerView: 'auto',
        spaceBetween: 15,
        grabCursor: !0,
        autoplay: {
            delay: 3e3,
            disableOnInteraction: !1
        },
        loop: !0,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".cs-next",
            prevEl: ".cs-prev"
        }, pagination: {                       //pagination(dots)
          el: '.cs-pagination',
          clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 1,
                spaceBetween: 26
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    })
    },100)
  }


}
