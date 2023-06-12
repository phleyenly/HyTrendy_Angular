import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HyTrendy_Angular';
  isAdminPage = false;
  // constructor(private route: ActivatedRoute) {}
  constructor(private notifier: NotifierService) {}

  ngOnInit() {
    if(window.location.pathname.startsWith('/admin')) {
      this.isAdminPage = true
    }
    console.log(this.isAdminPage)

    // setTimeout(() => {
    //   this.notifier.notify('success', 'Em ghét Hiệp thúi','notifier-icon-success')
      
    // }, 1000);
  }
}
