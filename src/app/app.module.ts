import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReuseComponent } from './reuse/reuse.component';
import { NavComponent } from './nav/nav.component';
import { NavInlineComponent } from './nav-inline/nav-inline.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { CounterComponent } from './counter/counter.component';
import { AutoDisableDirective } from './auto-disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReuseComponent,
    NavComponent,
    NavInlineComponent,
    TabComponent,
    TabsComponent,
    CounterComponent,
    AutoDisableDirective
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
