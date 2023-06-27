import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Login } from 'src/app/interface/authentication';
import { LoginData } from 'src/app/interface/loginData';
import { Person } from 'src/app/interface/person';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  auth: Login = {username: "", password: ""};
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  passwordConfirm: String = '';

  constructor(
    private authentication: AuthenticationService,
    private notifier: NotifierService,
    private personService: PersonService,
    ) { }


  login() {
    // console.log(this.auth);
    this.authentication.login(this.auth).subscribe(
      (data : LoginData) => {
        console.log(data.role)
        console.log(data)
        sessionStorage.setItem('token', data.token);
        // alert("Đăng Nhập Thành Công")
        this.notifier.notify('success', 'Đăng Nhập Thành Công');
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
        // alert(err.error)
        this.notifier.notify('error', err.error);
      }
    )
  }
  featurePending() {
    this.notifier.notify('warning', 'Tính năng đang phát triển');
  }

  register() {
    if(this.person.username!=='' && this.person.password!=='' && this.person.name!=='' && this.passwordConfirm!=='') {
    if(this.person.password=== this.passwordConfirm) {
      this.person.role= 'CLIENT';
      this.personService.createPerson(this.person).subscribe((m: any) => {
        if(m.message==='Thêm Thành Công') {
          this.notifier.notify('success', 'Đăng ký thành công');
        } else {
          this.notifier.notify('error', m.message);
        }
      }, (err) => {
        this.notifier.notify('error', 'Đăng ký thất bại');
      }
      )
    } else {
      this.notifier.notify('error', 'Mật khẩu và mật khẩu confirm chưa khớp');
    }
    } else {
      this.notifier.notify('error', 'Vui lòng nhập thông tin');
    }
  }

}
