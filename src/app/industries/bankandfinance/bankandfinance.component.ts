import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from "../common/casestudies/casestudies.component";


@Component({
  selector: 'app-bankandfinance',
 imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './bankandfinance.component.html',
  styleUrl: './bankandfinance.component.scss'
})
export class BankandfinanceComponent {

    constructor(private route: ActivatedRoute, private router: Router){
  
    }
  
  
 
    
    navigateTo(ind:any){
      this.router.navigate(['/'+ind])
    }
}
