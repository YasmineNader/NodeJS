import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _user:HttpClient) { }

  userRegister(data:any):Observable<any>{
    return this._user.post("http://localhost:3000/user/SignUp",data)

  }

  userLogin(data:any):Observable<any>{
    return this._user.post("http://localhost:3000/user/login",data)

  }
  
  alldata():Observable<any>{
    return this._user.get("http://localhost:3000/user/allProducts")

  }
}
