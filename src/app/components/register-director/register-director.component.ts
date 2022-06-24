import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/rank';
import { RegisterDirectorModel } from 'src/app/models/register-model';
import { School } from 'src/app/models/school';
import { RegisterDirectorService } from 'src/app/services/register-director.service';

@Component({
  selector: 'app-register-director',
  templateUrl: './register-director.component.html',
  styleUrls: ['./register-director.component.css']
})
export class RegisterDirectorComponent implements OnInit {

  confirmPassword1: any;
  schoolList: School[] = [];
  rankList: Rank[] = [];
  constructor(public registerDirectorService: RegisterDirectorService,
    private toastr: ToastrService,
    private http: HttpClient,
    private route : Router
    ) { 
    }

  ngOnInit(): void {
      this.getSchool();
      this.getRank();

  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
 
   insertRecord(form: NgForm) {

     this.registerDirectorService.postRegister().subscribe(
       res => {
         this.resetForm(form);
         this.registerDirectorService.refreshList();
         this.toastr.success('تمت عملية تسجيل المدير بنجاح','قبول'); //message + title
         this.route.navigate(['/login']);
       },
       err => {console.log(err);}
       
     );
   }
 
 updateRecord(form:NgForm) {
   this.registerDirectorService.putRegister().subscribe(
     res => {
       this.resetForm(form); 
       this.registerDirectorService.refreshList();
 
       this.toastr.info('Updated successfully','Register'); //message + title
     },
     err => {console.log(err);}
     
   );
 }
 
   resetForm(form:NgForm){
     form.form.reset();
     this.registerDirectorService.formData = new RegisterDirectorModel();
   }

   public getSchool() {
    this.http.get<School[]>("https://localhost:44308/GetSchoolList").subscribe(
      res => {
        this.schoolList = res;
        console.log(this.schoolList);
      }
    )
   }
   public getRank() {
    this.http.get<Rank[]>("https://localhost:44308/GetRankList").subscribe(
      res => {
        this.rankList = res;
      }
    )
   }
}
