import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
declare var Swiper: any;
declare var $: any;
@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent implements OnInit,AfterViewInit {

    constructor(private route: ActivatedRoute, private router: Router){
    
      }
  
    navigateTo(ind:any){
      this.router.navigate(['/'+ind])
    }

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
                slidesPerView: 3,
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

  ngOnInit(): void {
 
  }


}
