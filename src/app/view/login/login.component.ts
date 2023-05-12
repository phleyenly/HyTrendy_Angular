import { Component } from '@angular/core';
import { Login } from 'src/app/interface/authentication';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  auth: Login = {username: "", password: ""};

  constructor(private authentication: AuthenticationService) { }


  login() {
    // console.log(this.auth);
    this.authentication.login(this.auth).subscribe(
      data => {
        sessionStorage.setItem('token', data);
        window.location.href = '/home'
      
      }, 
      err => {
        console.error(err.status)
      }
    )
  }

}
