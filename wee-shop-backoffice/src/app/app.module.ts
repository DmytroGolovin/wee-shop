import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { Constants } from './shared/services/constants';
import { BaseService } from './shared/services/base.service';
import { LoaderService } from './shared/services/utils/loader.service';
import { LoaderInterceptor } from './shared/services/interceptors/loader.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule // auth
  ],
  exports: [RouterModule],
  providers: [
    Constants,
    BaseService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
