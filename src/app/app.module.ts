import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
