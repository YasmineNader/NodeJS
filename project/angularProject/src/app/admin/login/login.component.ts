import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted : boolean= false
  adminLoginValues =new FormGroup({
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.email,Validators.required])
  })
  constructor(private _adminlogin:AdminService) { }

  ngOnInit(): void {
  }

  adminLoginResult:any={}

  handleLoginAdmin(){
    let data:any = this.adminLoginValues.value

this._adminlogin.adminLogin(data).subscribe(res=>{
 this.adminLoginResult = res
})
  }
  get email(){return this.adminLoginValues.get('email')}

  get password(){return this.adminLoginValues.get('password')}

  
}
