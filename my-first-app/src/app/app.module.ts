import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingTimeOutComponent } from './Components/testing-time-out/testing-time-out.component';
import { CatchingEventObjectComponent } from './Components/catching-event-object/catching-event-object.component';
import { TwoWayDataBindingComponent } from './Components/two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingTimeOutComponent,
    CatchingEventObjectComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
