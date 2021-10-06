import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
