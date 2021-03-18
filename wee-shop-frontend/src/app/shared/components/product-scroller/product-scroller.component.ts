import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-scroller',
  templateUrl: './product-scroller.component.html',
  styleUrls: ['./product-scroller.component.scss']
})
export class ProductScrollerComponent implements OnInit {
  @Input() public scrollerTitle: string = "";
  @Input() public products: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }
}
