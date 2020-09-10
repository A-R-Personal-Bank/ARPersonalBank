import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A&R Personal Bank';
  myimage:string = "assets/Bank Image Logo.png";
}
