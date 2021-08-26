import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  getRandomToken() {    //Generate random token and store into LocalStorage
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var token = '';
    for ( var i = 0; i < 10; i++ ) {
        token += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    localStorage.setItem('Token', token);
    // console.log(token);
    this.router.navigate(['/dashboard']);   //navigate to dashboard page
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
