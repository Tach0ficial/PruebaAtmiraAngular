import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NasaApodResponse } from '../interfaces/nasaApodResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getLastSixAPOD():Observable<NasaApodResponse[]> {
    const API_KEY = environment.API_KEY;
    const startDate = this.getDateStartDate();
    return this.http.get<NasaApodResponse[]>(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}`);
  }

  // get the date of the 5 dyas before today
  getDateStartDate():string{
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4);
    console.log(startDate.toISOString());
    return startDate.toISOString().split('T')[0];
  }

}
