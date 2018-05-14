import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './theme/home/home.component';
import { TermComponent } from './theme/term/term.component';
import {
  ApiService,
  JwtService,
  CategoryService,
} from './share/services';
import { CarddetailComponent } from './theme/carddetail/carddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermComponent,
    CarddetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    ApiService,
    JwtService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
