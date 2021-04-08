import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,
              private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public signOut (){
    this._authService.singOut().subscribe(res => {
      this._router.navigate(['login']);
    });
  }

}
