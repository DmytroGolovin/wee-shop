import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [FooterComponent, LoadingSpinnerComponent, NavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent, LoadingSpinnerComponent, FooterComponent]
})
export class SharedModule { }
