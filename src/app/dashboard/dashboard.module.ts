import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    GalleryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
