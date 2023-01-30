import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './shared/components/home/home.component';
import { HomeCardOneComponent } from './shared/components/home-cards/home-card-one/home-card-one.component';
import { HomeCardTwoComponent } from './shared/components/home-cards/home-card-two/home-card-two.component';
import { HomeCardThreeComponent } from './shared/components/home-cards/home-card-three/home-card-three.component';
import { HomeCardFourComponent } from './shared/components/home-cards/home-card-four/home-card-four.component';
import { CustomerInformationComponent } from './shared/components/customer-information/customer-information.component';
import { LoginComponent } from './shared/security/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationComponent } from './shared/users/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    HomeCardOneComponent,
    HomeCardTwoComponent,
    HomeCardThreeComponent,
    HomeCardFourComponent,
    CustomerInformationComponent,
    LoginComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
