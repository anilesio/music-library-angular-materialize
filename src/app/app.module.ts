import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayHomeComponent } from './home/play-home/play-home.component';
import { SingleDataComponent } from './single-data/single-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayHomeComponent,
    SingleDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
