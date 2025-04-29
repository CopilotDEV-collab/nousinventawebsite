//import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Component,HostListener, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy{

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  private locomotiveScroll: any;


  title = 'beta';
  isScrolled:boolean=false
  url:any;
  constructor(private route: ActivatedRoute, private router: Router,private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: object){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.url = event.url
      if(this.navignoreurl(this.url)){
        this.isScrolled = true
      }else{
        this.isScrolled = false
      }
     }
    });
    }


    navignoreurl(url:any):boolean{
      return url === '/contact' || url === '/aipage' || url === '/aiautomation' || url === '/aiproductdev' || url === '/aiconsulting'
    }
  
     
    
    navigateTo(ind:any){
      setTimeout(()=>{
        this.locomotiveScroll.update();
      },700)     
      this.router.navigate(['/'+ind])
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
      if(this.navignoreurl(this.url)){
        this.isScrolled = true;
      }else{
        this.isScrolled = window.scrollY > 50;
      }
    }




     async ngAfterViewInit(): Promise<void> {
      if (isPlatformBrowser(this.platformId)) {
        import('locomotive-scroll').then((LocomotiveScroll) => {
          this.ngZone.runOutsideAngular(() => {
            this.locomotiveScroll = new LocomotiveScroll.default({
              el: this.scrollContainer.nativeElement,
              smooth: true,
              lerp: 0.07
            });
            this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd) {
                setTimeout(() => {
                  this.locomotiveScroll.scrollTo(0, { duration: 0 });
                  this.locomotiveScroll.update();
                }, 500);
              }
            });
            this.locomotiveScroll.update();
            window.addEventListener('resize', () => this.locomotiveScroll.update());
            this.locomotiveScroll.on('scroll', (event: any) => {
              this.ngZone.run(() => {
                if(this.navignoreurl(this.url)){
                  this.isScrolled = true;
                }else{
                  this.isScrolled = event.scroll.y > 100;
                }
              });
            });

          });
        });
      }
      }


      ngOnDestroy(): void {
    if (this.locomotiveScroll) {
      this.locomotiveScroll.destroy();
    }
  }
}
