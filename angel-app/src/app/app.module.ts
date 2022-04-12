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
import { MainLogoComponent } from './shared/components/main-logo/main-logo.component';
import { HomeCardOneComponent } from './shared/components/home-cards/home-card-one/home-card-one.component';
import { HomeCardTwoComponent } from './shared/components/home-cards/home-card-two/home-card-two.component';
import { HomeCardThreeComponent } from './shared/components/home-cards/home-card-three/home-card-three.component';
import { HomeCardFourComponent } from './shared/components/home-cards/home-card-four/home-card-four.component';
import { CustomerInformationComponent } from './shared/components/customer-information/customer-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    MainLogoComponent,
    HomeCardOneComponent,
    HomeCardTwoComponent,
    HomeCardThreeComponent,
    HomeCardFourComponent,
    CustomerInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
