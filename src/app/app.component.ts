import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    if(window.location.pathname.startsWith('/admin')) {
      this.isAdminPage = true
    }
    console.log(this.isAdminPage)
  }
}
