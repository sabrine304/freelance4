import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/rank';
import { RegisterTeacherModel } from 'src/app/models/register-model';
import { School } from 'src/app/models/school';
import { RegisterTeacherService } from 'src/app/services/register-teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit, AfterViewInit {

  schoolList: School[] = [];
  rankList: Rank[] = [];
  rankName: string;

  confirmPassword1: any;
  constructor(public registerTeacherService: RegisterTeacherService,
    private toastr: ToastrService,
    private route : Router,
    private elementRef: ElementRef,
    private http: HttpClient
    ) { 
    }

  ngOnInit(): void {
    this.getSchool();
    this.getRank();
  }

  ngAfterViewInit() {
   this.elementRef.nativeElement.ownerDocument
   .body.style.backgroundColor = '#E5FBF2';
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
 
   insertRecord(form: NgForm) {
    if(form.valid) {
      this.registerTeacherService.postRegister().subscribe(
        res => {
          this.resetForm(form);
          // this.registerTeacherService.refreshList();
          this.toastr.success('تمت عملية تسجيل المعلم بنجاح','قبول'); //message + title
          this.route.navigate(['/login']);
        },
        err => {console.log(err);}
        
      );
    } else (form === null);{
      form.invalid;
    }

   
   }


 
 updateRecord(form:NgForm) {
   this.registerTeacherService.putRegister().subscribe(
     res => {
       this.resetForm(form); 
       this.registerTeacherService.GetTeacherList();
 
       this.toastr.info('Updated successfully','Register'); //message + title
     },
     err => {console.log(err);}
     
   );
 }
 
   resetForm(form:NgForm){
     form.form.reset();
     this.registerTeacherService.formData = new RegisterTeacherModel();
   }

   public getSchool() {
    this.http.get<School[]>("https://localhost:44308/GetSchoolList").subscribe(
      res => {
        this.schoolList = res;
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
