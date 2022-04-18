import { Component, OnInit } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { Router } from '@angular/router';
import { NasaService } from '../../services/nasa.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  apod: NasaApodResponse = {
    date: new Date(),
    explanation: '',
    title: '',
    url: ''
  };

  isLoading: boolean = true;

  constructor(private router: Router,
    private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getAPODByDate(this.router.url.split('/')[2])
      .pipe(
        delay(2000)
      ).subscribe({
        next: (apod: NasaApodResponse) => {
          this.apod = apod;
          this.isLoading = false;
        },
        error: (err) => {
          this.router.navigate(['/']);
        }
      });
  }
}
