import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-aidrivenautomation',
    imports: [RouterModule],
  templateUrl: './aidrivenautomation.component.html',
  styleUrl: './aidrivenautomation.component.scss'
})
export class AidrivenautomationComponent {

  constructor(private route: ActivatedRoute, private router: Router){
    
      }
  
  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
}


}
