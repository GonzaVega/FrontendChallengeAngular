import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FrontEnd-Challenge';
  // isLoggedIn = true;

  constructor() {}

  ngOnInit(): void {}
  // onLogIn() {
  //   this.isLoggedIn = false;
  // }
  // onLogOut() {
  //   this.isLoggedIn = true;
  // }
}
