import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatedataComponent } from './createdata/createdata.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    CreatedataComponent,
    DisplaydataComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
