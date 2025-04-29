import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {


  constructor(private route: ActivatedRoute, private router: Router){

  }


  ngAfterViewInit() {
   
  }           
  
  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
  }


}
