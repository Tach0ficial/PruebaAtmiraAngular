import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';


@NgModule({
  declarations: [
    DetailComponent,
    DashboardComponent,
    PictureCardComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    HttpClientModule
  ]
})
export class NasaModule { }
