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

  getLastSixAPOD(startDate: string):Observable<NasaApodResponse[]> {
    const API_KEY = environment.API_KEY;
    return this.http.get<NasaApodResponse[]>(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}`);
  }
}
