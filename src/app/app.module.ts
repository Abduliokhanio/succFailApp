import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccComponent } from './buttonComp/succ/succ.component';
import { FailComponent } from './buttonComp/fail/fail.component';
import { NeutralComponent } from './neutral/neutral/neutral.component';
import { RandomButtonComponent } from './buttonComp/random-button/random-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccComponent,
    FailComponent,
    NeutralComponent,
    RandomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,SuccComponent]
})
export class AppModule { }
