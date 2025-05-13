import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from '../common/casestudies/casestudies.component';

@Component({
  selector: 'app-education',
  imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './realestate.component.html',
  styleUrl: './realestate.component.scss'
})
export class RealEstateComponent {

  
  constructor(private route: ActivatedRoute, private router: Router){
    
  }

  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
  }
}

