import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed: boolean = true;
  public isOnTop = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  doSomething() {
    if(window.pageYOffset > 0){
      this.isOnTop = false;
    }else{
      this.isOnTop = true;
    }
  }

}
