import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from '../common/casestudies/casestudies.component';

@Component({
  selector: 'app-retailandecommrece',
  imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './retailandecommrece.component.html',
  styleUrl: './retailandecommrece.component.scss'
})
export class RetailandecommreceComponent {
      constructor(private route: ActivatedRoute, private router: Router){
      }
      navigateTo(ind:any){
        this.router.navigate(['/'+ind])
      }
}
