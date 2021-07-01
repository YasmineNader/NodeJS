import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './admin/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './admin/login/login.component';
import { UserloginComponent } from './user/userlogin/userlogin.component'
import { UserInterceptor } from './interceptors/user.interceptor';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    RegisterComponent,
    LoginComponent,
    UserloginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
