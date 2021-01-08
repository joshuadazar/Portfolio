import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { LayoutService } from './layout/services/layout.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
