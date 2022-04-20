import { Injectable } from '@angular/core';
import { NasaApodResponse } from '../interfaces/nasaApodResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor() { }
  
  getLastApod(): NasaApodResponse{
    return JSON.parse(localStorage.getItem('lastApod')!);
  }

  setLastApod(apod: NasaApodResponse){
    localStorage.setItem('lastApod', JSON.stringify(apod));
  }

  removeLastApod(){
    localStorage.removeItem('lastApod');
  }
}
