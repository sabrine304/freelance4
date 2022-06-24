import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/register-model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword1: any;
  selecteFile = null;
  constructor(public registerService: RegisterService,
    private toastr: ToastrService,
    private route : Router,
    private httpClient : HttpClient) { }

    file: any;
    fileId: any;
  ngOnInit(): void {
  }

  selectFile(e : any) {
    this.file = e.target.files[0];
    console.log(e);
    // this.fileId = e.target.
  }

  upload() {
   let formData = new FormData();
   formData.append('file', this.file);
   this.httpClient.post('https://localhost:44308/api/demo/upload',formData).toPromise().then(
     res => {
       console.log("res",res)
     },
     err => {
       console.log(err);
     }
   )

   ;
  }
 
  onSubmit(form:NgForm) {
    this.insertRecord(form);
  }
 
   insertRecord(form: NgForm) {
     this.registerService.postRegister().subscribe(
       res => {
         this.resetForm(form);
         this.registerService.refreshList();
         this.toastr.success('تمت عملية التسجيل بنجاح','قبول'); //message + title
         this.route.navigate(['/login']);
       },
       err => {console.log(err);}
       
     );
   }
 
 updateRecord(form:NgForm) {
   this.registerService.putRegister().subscribe(
     res => {
       this.resetForm(form); 
       this.registerService.refreshList();
 
       this.toastr.info('Updated successfully','Register'); //message + title
     },
     err => {console.log(err);}
     
   );
 }
 
   resetForm(form:NgForm){
     form.form.reset();
     this.registerService.formData = new RegisterModel();
   }

   onFileSelected(event:any) {
     console.log(event);
     this.selecteFile = event.target.files[0];
   }
   onUpload() {

   }
}
