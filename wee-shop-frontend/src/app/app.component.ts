import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sweat-shop-web';

  public isSimpleMenu: boolean = false;

  onActivate(event: any) {
    console.log(event.constructor.name);
    this.isSimpleMenu = event.constructor.name == "ProductDetailsComponent";

    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 8);
}
}
