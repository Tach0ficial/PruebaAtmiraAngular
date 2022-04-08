import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DetailComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    HttpClientModule
  ]
})
export class NasaModule { }
