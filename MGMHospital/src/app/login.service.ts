import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class UserLogin
{
  constructor(
    public userEmail:string,
    public userPassword:string,
    public userRole:string
  ) { }
}




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  CheckLogin(userLogin:UserLogin)
  {

    return this.httpClient.post<UserLogin>("http://localhost:8080/userLogin",userLogin);
  }
}
