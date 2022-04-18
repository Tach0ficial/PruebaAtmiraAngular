import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { LoadingLogoComponent } from './components/loading-logo/loading-logo.component';


@NgModule({
  declarations: [
    DetailComponent,
    DashboardComponent,
    PictureCardComponent,
    LoadingLogoComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    HttpClientModule 
  ]
})
export class NasaModule { }
