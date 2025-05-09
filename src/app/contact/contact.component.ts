import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var Dropzone: any;
@Component({
  selector: 'app-contact',
  imports: [CommonModule,RouterModule,ReactiveFormsModule, HttpClientModule],
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

  contactForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder, private http: HttpClient){
    this.contactForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      companyNameorWebsite: ['', Validators.required],
      projectBrief: ['', Validators.required],
      projectQueries: ['',Validators.required],
      heardAboutUs: ['', Validators.required],
      fileNo_1: [null],
      fileNo_2: [null],
      fileNo_3: [null],
      fileNo_4: [null],
    });
    }

  navigateTo(ind:any){
    this.router.navigate(['/'+ind])
  }
  bannerfile:any=[];

  ngAfterViewInit(): void {
    new Dropzone("#dropzone-banner", {
      url: "/",
      paramName: "file12",
      previewTemplate: this.DROPZONE__PREVIEW_TEMPLATE,
      acceptedFiles: ".jpeg,.jpg,.png,.gif",
      maxFiles: 4,
      maxFilesize: 1, // MB
      addRemoveLinks: true,
      accept: function (file: any, done: any) {
        done();
      },
      success: (file: any, response: any) => {
        const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        file.customId = uniqueId;
        this.bannerfile.push({id: uniqueId, file: file});
        console.log(file)
      }, removedfile: (file: any) => {
        console.log(file)
        file.previewElement.remove();
        this.bannerfile = this.bannerfile.filter((f:any) => f.id !== file.customId);
      }, bind(this) { }
    });
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    if(this.bannerfile.length > 0){
      for(let i=0;i<this.bannerfile.length;i++){
        this.contactForm.get('fileNo_'+(i+1))?.setValue(this.bannerfile[i].file.dataURL);
      }
    }
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
       this.http.post('https://nousinventa.com/app/api/submitcontact', this.contactForm.value)
        .subscribe({
          next: res => alert('Submitted successfully!'),
          error: err => alert('Error: ' + err.message)
        });
    }
  }

}
