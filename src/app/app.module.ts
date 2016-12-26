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
import { IfDirective } from './if.directive';
import { ForDirective } from './for.directive';
import { FocusDirective } from './focus.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ReuseComponent,
    NavInlineComponent,
    NavComponent,
    TabComponent,
    TabsComponent,
    CounterComponent,
    AutoDisableDirective,
    IfDirective,
    ForDirective,
    FocusDirective,
    CardComponent
  ],
  entryComponents: [CardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
