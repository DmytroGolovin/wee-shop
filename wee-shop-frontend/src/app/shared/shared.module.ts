import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProductScrollerComponent } from './components/product-scroller/product-scroller.component';



@NgModule({
  declarations: [NavBarComponent, LoadingSpinnerComponent, ProductScrollerComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavBarComponent, LoadingSpinnerComponent, ProductScrollerComponent]
})
export class SharedModule { }
