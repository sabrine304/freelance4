import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/rank';
import { RegisterInspectorModel } from 'src/app/models/register-model';
import { School } from 'src/app/models/school';
import { RegisterInspectorService } from 'src/app/services/register-inspector.service';

@Component({
  selector: 'app-register-inspector',
  templateUrl: './register-inspector.component.html',
  styleUrls: ['./register-inspector.component.css']
})
export class RegisterInspectorComponent implements OnInit,AfterViewInit {
  confirmPassword1: any;
  schoolList: School[] = [];
  rankList: Rank[] = [];


  constructor(public registerInspectorService: RegisterInspectorService,
    private toastr: ToastrService,
    private route : Router,
    private http: HttpClient,
    private elementRef: ElementRef) { }

 ngOnInit(): void {
  this.getSchool();
  this.getRank();

   
 }
 ngAfterViewInit() {
  
 }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
 
   insertRecord(form: NgForm) {

     this.registerInspectorService.postRegister().subscribe(
       res => {
         this.resetForm(form);
         this.registerInspectorService.refreshList();
         this.toastr.success('تمت عملية تسجيل المتفقد بنجاح','قبول'); //message + title
         this.route.navigate(['/login']);
       },
       err => {console.log(err);}
       
     );
   }
 
 updateRecord(form:NgForm) {
   this.registerInspectorService.putRegister().subscribe(
     res => {
       this.resetForm(form); 
       this.registerInspectorService.refreshList();
 
       this.toastr.info('Updated successfully','Register'); //message + title
     },
     err => {console.log(err);}
     
   );
 }
 
   resetForm(form:NgForm){
     form.form.reset();
     this.registerInspectorService.formData = new RegisterInspectorModel();
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
