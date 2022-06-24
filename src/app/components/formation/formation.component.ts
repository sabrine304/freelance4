import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/models/formation';
import { School } from 'src/app/models/school';
import { FormationService } from 'src/app/services/formation.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  schoolList: School[] = [];
  schoolItem: School;
  formation: Formation;
  userConnectedId: any;
  constructor(private http : HttpClient, private schoolService : SchoolService,
              private formationService : FormationService,
              private toastr: ToastrService,
              private route: Router
              ) { 
    this.formation = new Formation();
    this.schoolItem = new School();
  }

  ngOnInit(): void {
    this.getSchool()
    this.userConnectedId = localStorage.getItem('Id');
  };

public onSubmit(form: NgForm){
    const schoolnfo = new School();
    schoolnfo.id = this.formation.schoolId;
    this.formation.schoolRefId = schoolnfo;  
    this.schoolService.GetSchoolById(this.formation.schoolId).then(
     res => {
    this.schoolItem.name = res.name;
    this.formation.schoolRefId.name = res.name;
     }
    )
    this.formation.schoolRefId.inspectorId= this.userConnectedId;
    this.insertRecord(form);

}

public insertRecord(form: NgForm) {
  if(form.valid) {
    this.formationService.postFormation(this.formation).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('تمت عملية تسجيل المعلم بنجاح','قبول'); //message + title
        this.route.navigate(['/login']);
      },
      err => {console.log(err);}
      
    );
  } else (form === null);{
    form.invalid;
  }
 }

 resetForm(form:NgForm){
  form.form.reset();
  this.formation = new Formation();
}
  public getSchool() {
    this.http.get<School[]>("https://localhost:44308/GetSchoolList").subscribe(
      res => {
        this.schoolList = res;
      }
    )
   }



}
