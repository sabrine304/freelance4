import { Component, OnInit } from '@angular/core';
import { RegisterTeacherModel } from 'src/app/models/register-model';
import { RegisterTeacherService } from 'src/app/services/register-teacher.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    teacherList: RegisterTeacherModel[];
    getTeacher: boolean = false;
    getDirector: boolean = false;
    getInspector: boolean = false;


  constructor(public registerTeacherService: RegisterTeacherService,) { }


  ngOnInit(): void {

  }

public getListTeacher() {

      this.getTeacher = true;
      this.getDirector = false;
      this.getInspector = false;
      this.registerTeacherService.GetTeacherList().then(
        res => {
          this.teacherList= res;
          console.log(this.teacherList);

    }
  )
}

public getListDirector() {
  this.getTeacher = false;
  this.getDirector = true;
  this.getInspector = false;
}

public getListInspector() {
  this.getTeacher = false;
  this.getDirector = false;
  this.getInspector = true;
}
}
