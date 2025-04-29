import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CasestudiesComponent } from '../../industries/common/casestudies/casestudies.component';


@Component({
  selector: 'app-coldcaller',
  imports: [RouterModule, CasestudiesComponent],
  templateUrl: './coldcaller.component.html',
  styleUrl: './coldcaller.component.scss'
})
export class ColdcallerComponent {

  constructor(private route: ActivatedRoute, private router: Router){
  
  }

  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
  }
}
