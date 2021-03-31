import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProductScrollerComponent } from './components/product-scroller/product-scroller.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimpleNavBarComponent } from './components/simple-nav-bar/simple-nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, LoadingSpinnerComponent, ProductScrollerComponent, FooterComponent, SimpleNavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavBarComponent, LoadingSpinnerComponent, ProductScrollerComponent, FooterComponent, SimpleNavBarComponent]
})
export class SharedModule { }
