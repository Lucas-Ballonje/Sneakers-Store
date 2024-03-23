import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
