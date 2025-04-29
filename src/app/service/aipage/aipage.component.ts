import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aipage',
  imports: [RouterModule],
  templateUrl: './aipage.component.html',
  styleUrl: './aipage.component.scss'
})
export class AipageComponent {

  constructor(private route: ActivatedRoute, private router: Router){
  
    }

  navigateTo(ind:any){
       this.router.navigate(['/'+ind])
  }


}
