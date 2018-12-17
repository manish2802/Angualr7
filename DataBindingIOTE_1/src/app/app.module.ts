import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,EventbindingComponent, TwowaybindingComponent, InterpolationComponent, PropertybindingComponent
    //LoginComponent
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
