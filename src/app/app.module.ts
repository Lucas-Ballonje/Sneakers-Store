import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { BannerComponent } from './modules/components/banner/banner.component';
import { SneakersComponent } from './modules/components/sneakers/sneakers.component';
import { HeaderSneakerComponent } from './modules/components/sneakers/header-sneaker/header-sneaker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    SneakersComponent,
    HeaderSneakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
