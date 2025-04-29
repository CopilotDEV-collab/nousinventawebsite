import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
declare var Dropzone: any;
@Component({
  selector: 'app-contact',
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  DROPZONE__PREVIEW_TEMPLATE:any = `<div class="dz-preview dz-file-preview">
  <div class="dz-details">
      <div class="dz-thumbnail">
        <img data-dz-thumbnail>
        <span class="dz-nopreview">No preview</span>
        <div class="dz-success-mark"></div>
        <div class="dz-error-mark"></div>
          <div class="dz-error-message"><span data-dz-errormessage></span></div>
        <div class="progress">
          <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
        </div>
            </div>
          <div class="dz-filename" data-dz-name></div>
        <div class="dz-size" data-dz-size></div>
      </div>
      </div>`;

  constructor(private route: ActivatedRoute, private router: Router){
  
    }

  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
  }
  bannerfile:any;

  ngAfterViewInit(): void {
    new Dropzone("#dropzone-banner", {
      url: "/",
      paramName: "file12",
      previewTemplate: this.DROPZONE__PREVIEW_TEMPLATE,
      acceptedFiles: ".jpeg,.jpg,.png,.gif",
      maxFiles: 10,
      maxFilesize: 2, // MB
      addRemoveLinks: true,
      accept: function (file: any, done: any) {
        done();
      },
      success: (file: File, response: any) => {
        this.bannerfile = file
      }, removedfile: (file: any) => {
        file.previewElement.remove();
      }, bind(this) { }
    });
  }

}
