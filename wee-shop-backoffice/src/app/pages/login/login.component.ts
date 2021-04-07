import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login (){
    localStorage.setItem('currentUser', 'token');
    this._router.navigate(['']);

  }
}
