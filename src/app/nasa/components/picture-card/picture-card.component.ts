import { Component, Input, OnInit } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  apod!: NasaApodResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
