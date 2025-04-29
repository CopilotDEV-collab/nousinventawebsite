import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from '../common/casestudies/casestudies.component';

@Component({
  selector: 'app-healthandlifescience',
  imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './healthandlifescience.component.html',
  styleUrl: './healthandlifescience.component.scss'
})
export class HealthandlifescienceComponent {
  
        constructor(private route: ActivatedRoute, private router: Router){
        }
        navigateTo(ind:any){
          this.router.navigate(['/'+ind])
        }
}
