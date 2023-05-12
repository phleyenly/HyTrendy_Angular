import { Component } from '@angular/core';
import { Login } from 'src/app/interface/authentication';
import { LoginData } from 'src/app/interface/loginData';
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
      (data : LoginData) => {
        console.log(data.role)
        console.log(data)
        sessionStorage.setItem('token', data.token);
        alert("Đăng Nhập Thành Công")
        switch (data.role) {
          case "ADMIN" :

            window.location.href = '/admin/home'
            
            break;
        
            case "CLIENT" :
              window.location.href = '/home'
              break;
        }
      }, 
      (err) => {
        alert(err.error)
      }
    )
  }

}
