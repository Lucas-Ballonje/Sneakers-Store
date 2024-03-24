import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { SneakersComponent } from '../components/sneakers/sneakers.component';




@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SneakersComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
