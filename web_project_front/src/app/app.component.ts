import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  login(){
    this.loginService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    })
  }
  logout() {
    localStorage.removeItem('token');
    this.logged = false;
  }
}
