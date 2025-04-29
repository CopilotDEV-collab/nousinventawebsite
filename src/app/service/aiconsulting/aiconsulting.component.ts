import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aiconsulting',
   imports: [RouterModule],
  templateUrl: './aiconsulting.component.html',
  styleUrl: './aiconsulting.component.scss'
})
export class AiconsultingComponent {

  constructor(private route: ActivatedRoute, private router: Router){
    
      }
  
  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
}


}
