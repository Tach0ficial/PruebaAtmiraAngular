import { Component, Input } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {

  @Input()
  apod: NasaApodResponse = {
    date: new Date(),          
    explanation: '',
    title: '',           
    url: ''
  };

  constructor() { }

}
