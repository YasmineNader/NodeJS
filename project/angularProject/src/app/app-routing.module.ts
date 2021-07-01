import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterFormComponent } from './admin/register-form/register-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

const routes: Routes = [
  {path:"adminRegister",component:RegisterFormComponent},
  {path:"userRegister",component:RegisterComponent},
  {path:"loginAdmin",component:LoginComponent},
  {path:"loginUser",component:UserloginComponent},
  {path:"home",component:HomeComponent},

  // {path:"**",component:UserloginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
