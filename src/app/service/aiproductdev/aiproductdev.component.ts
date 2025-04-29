import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aiproductdev',
  imports: [RouterModule],
  templateUrl: './aiproductdev.component.html',
  styleUrl: './aiproductdev.component.scss'
})
export class AiproductdevComponent {

  constructor(private route: ActivatedRoute, private router: Router){
    
      }
  
  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
}


}
