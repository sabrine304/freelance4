import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormControlName, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterHomeComponent } from './components/register-home/register-home.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { RegisterDirectorComponent } from './components/register-director/register-director.component';
import { RegisterInspectorComponent } from './components/register-inspector/register-inspector.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { FormationComponent } from './components/formation/formation.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    RegisterHomeComponent,
    RegisterTeacherComponent,
    RegisterDirectorComponent,
    RegisterInspectorComponent,
    UserListComponent,
    TeacherDetailComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter,
        allowedDomains : ["localhost:5001"],
        disallowedRoutes : []
      }
    }),
    ToastrModule.forRoot(),
    AppRoutingModule //globale

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
