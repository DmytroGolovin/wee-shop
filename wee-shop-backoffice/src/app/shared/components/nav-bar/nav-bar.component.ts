import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentPage: string = "";

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
