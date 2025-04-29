import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from '../common/casestudies/casestudies.component';

@Component({
  selector: 'app-travelandlogistic',
  imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './travelandlogistic.component.html',
  styleUrl: './travelandlogistic.component.scss'
})
export class TravelandlogisticComponent {

      constructor(private route: ActivatedRoute, private router: Router){
    
      }

      navigateTo(ind:any){
        this.router.navigate(['/'+ind])
      }
}