import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/rank';
import { RegisterTeacherModel } from 'src/app/models/register-model';
import { School } from 'src/app/models/school';
import { UserModel } from 'src/app/models/user';
import { RankService } from 'src/app/services/rank.service';
import { RegisterTeacherService } from 'src/app/services/register-teacher.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  public teacherId: number;
  teacherSelected : RegisterTeacherModel;
  schoolList: School[] = [];
  schoolName: any;
  rankName: any;
  rankList: Rank[] = [];

  
  constructor(private route: ActivatedRoute, 
              public registerTeacherService: RegisterTeacherService,
              public schoolService: SchoolService,
              public rankService: RankService,
              private http: HttpClient,
              private toastr: ToastrService) 
          { 
              this.route.params.subscribe((params) => {
              this.teacherId =+params['id'];
              });
              this.teacherSelected = new RegisterTeacherModel();
            }

  ngOnInit(): void {
    this.getDetailById();
    this.getSchool();
    this.getRank();
  }

  public getDetailById() {
     this.registerTeacherService.GetTeacherById(this.teacherId).then(
      res => {
      this.teacherSelected = res;
      console.log("teacherSelected",this.teacherSelected)
      this.getSchoolById(this.teacherSelected.schoolId);
      this.getRankById(this.teacherSelected.rankId);

      }
     )
  }

  
  public getSchool() {
    this.http.get<School[]>("https://localhost:44308/GetSchoolList").subscribe(
      res => {
        this.schoolList = res;
      }
    )
   }

   public getSchoolById(id: number) {
    this.schoolService.GetSchoolById(id).then(
     res => {
    this.schoolName = res.name;
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

 public getRankById(id: number) {
  this.rankService.GetRankById(id).then(
   res => {
  this.rankName = res.rankName;
   }
  )
}

updateRecord(form:NgForm) {
  
  console.log("registerTeacherService",this.registerTeacherService.formData)
  let updateData = new RegisterTeacherModel();
  let user = new UserModel();
  updateData = this.teacherSelected;
  updateData.id = this.teacherSelected.id;
  updateData.fullName = this.registerTeacherService.formData.fullName;
  updateData.email = this.registerTeacherService.formData.email;
  updateData.phoneNumber = this.registerTeacherService.formData.phoneNumber;
  updateData.address = this.registerTeacherService.formData.address;
  updateData.schoolId = 4;
  updateData.rankId = 1;
  const userId= user.id =this.teacherSelected.userId;

  updateData.userRefId.id  = userId;

  // updateData.userRefId.id = this.teacherSelected.userId;
  console.log("updateData",updateData);

  this.registerTeacherService.putRegister(this.teacherId, updateData).subscribe(
    res => {
      this.resetForm(form); 

      this.toastr.info('Updated successfully','Register'); //message + title
    },
    err => {console.log(err);}
    
  );
}

resetForm(form:NgForm) {
  form.form.reset();
  this.registerTeacherService.formData = new RegisterTeacherModel();
}

}
