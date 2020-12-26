import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import amplify from '../aws-exports';


Amplify.configure(amplify);

Amplify.configure({
  Interactions: {
    bots: {
      "WeatherBot": {
        "name": "WeatherBot",
        "alias": "$LATEST",
        "region": "us-east-1",
      }
    }
  }
}); 

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
