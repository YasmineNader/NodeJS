import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _admin:HttpClient) {
    
   }

   adminRegister(data:any):Observable<any>{
    return  this._admin.post('http://localhost:3000/admin/SignUp',data)
   }

   adminLogin(data:any):Observable<any>{
    return  this._admin.post('http://localhost:3000/admin/login',data)
   }
}



