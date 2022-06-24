import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login-model';
import { UserModel } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  invalidLogin: boolean ;
  credentials: LoginModel;
  userConnected: any;
  userConnectedRole: any;
  userConnectedFullName: any;
  userConnectedId: any;

  constructor(private router: Router, private http: HttpClient,
              private elementRef: ElementRef, public loginService: LoginService) { 
    this.credentials = new LoginModel();
    this.userConnected = new UserModel();

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#E5FBF2';
}

  public async login(form: NgForm) {
    if (form.valid) {
    this.http.post("https://localhost:44308/api/Auth/Login", this.credentials, 
     {responseType: 'text'}
    )
    .subscribe(response => {
      const token = response
      localStorage.setItem("jwt", token);
       this.invalidLogin = false;
      this.router.navigate(["/home"]);
      this.getUserConnected(this.credentials);

    }, err => {
      this.invalidLogin = true;
    })
  }
  }

  public async getUserConnected(user : LoginModel) {
      this.userConnected = this.http.post("https://localhost:44308/api/Auth/Authenticate",user).subscribe
      (res => {
          this.userConnected = res;
          console.log(this.userConnected.roleCode);
          localStorage.setItem('userConnected', JSON.stringify(this.userConnected));


          
          this.userConnectedRole = localStorage.setItem('Role',this.userConnected.roleCode);
          this.userConnectedFullName= localStorage.setItem('FullName',this.userConnected.userName);
          this.userConnectedId= localStorage.setItem('Id',this.userConnected.id);



      })
  }
}
