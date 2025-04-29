import { Component } from '@angular/core';
declare var Swiper: any;
declare var $: any;

@Component({
  selector: 'app-insight',
  imports: [],
  templateUrl: './insight.component.html',
  styleUrl: './insight.component.scss'
})
export class InsightComponent {

  ngAfterViewInit() {
    setTimeout(()=>{
      new Swiper("#swiper-reviews",{
        slidesPerView: 1,
        spaceBetween: 5,
        grabCursor: !0,
        autoplay: {
            delay: 3e3,
            disableOnInteraction: !1
        },
        loop: !0,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 26
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    })
    },100)
   
  }     
}
