import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NasaApodResponse } from '../interfaces/nasaApodResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private API_KEY = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getLastSixAPOD():Observable<NasaApodResponse[]> {
    
    const startDate = this.getDateOfFiveDaysBefore();
    return this.http.get<NasaApodResponse[]>(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}&start_date=${startDate}`);
  }

  getDateOfFiveDaysBefore():string{
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4);
    console.log(startDate.toISOString());
    return startDate.toISOString().split('T')[0];
  }

  getAPODByDate(date:string):Observable<NasaApodResponse> {
    return this.http.get<NasaApodResponse>(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}&date=${date}`);
  }

}
