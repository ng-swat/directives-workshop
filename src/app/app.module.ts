import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReuseComponent } from './reuse/reuse.component';
import { NavComponent } from './nav/nav.component';
import { NavInlineComponent } from './nav-inline/nav-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    ReuseComponent,
    NavComponent,
    NavInlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
