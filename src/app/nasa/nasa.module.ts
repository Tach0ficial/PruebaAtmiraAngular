import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    GalleryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }
