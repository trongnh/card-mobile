import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './theme/home/home.component';
// import {
//   ApiService,
//   JwtService,
//   CategoryService,
// } from './share/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    // ApiService,
    // JwtService,
    // CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
