import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AuthGuard } from './guards/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { RegisterHomeComponent } from './components/register-home/register-home.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { RegisterDirectorComponent } from './components/register-director/register-director.component';
import { RegisterInspectorComponent } from './components/register-inspector/register-inspector.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { FormationComponent } from './components/formation/formation.component';

const routes: Routes = [
  {path :'', component: LoginComponent},
  {path :'home', component: HomeComponent},
  {path :'customers', component: CustomersComponent, canActivate: [AuthGuard] }, 
  {path :'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  {path :'user-list/teacher-detail/:id', component: TeacherDetailComponent, canActivate: [AuthGuard] },
  {path :'formation', component: FormationComponent, canActivate: [AuthGuard] }, 
  {path :'login', component: LoginComponent},
  {path :'register', component : RegisterComponent},
  {path :'register-home', component : RegisterHomeComponent},
  {path :'register-teacher', component : RegisterTeacherComponent},
  {path :'register-director', component : RegisterDirectorComponent},
  {path :'register-inspector', component : RegisterInspectorComponent}




  //i can't acces to this page only if i have a token in the localstorge and this token not expired

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})

export class AppRoutingModule { }
