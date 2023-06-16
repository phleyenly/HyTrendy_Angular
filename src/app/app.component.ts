import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from './service/authentication.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HyTrendy_Angular';
  isAdminPage = false;
  isRoleAdmin = false;
  // constructor(private route: ActivatedRoute) {}
  constructor(private notifier: NotifierService, private authenService: AuthenticationService) {}

  ngOnInit() {
    if(window.location.pathname.startsWith('/admin')) {
      this.isAdminPage = true
      const token = sessionStorage.getItem('token')
      if(token) {
        this.authenService.authentication().subscribe (
          data => {
            if(data.role !== 'ADMIN') {
              window.location.href = '/login'
            } else {
              this.isRoleAdmin = true
            }
          },
          err => {
            window.location.href = '/login'
          }
        )
      } else {
        window.location.href = '/login'
      }
    }

    // setTimeout(() => {
    //   this.notifier.notify('success', 'Em ghét Hiệp thúi','notifier-icon-success')
      
    // }, 1000);
  }
}
