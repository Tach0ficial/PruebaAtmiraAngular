import { Component, OnInit } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { Router } from '@angular/router';
import { NasaService } from '../../services/nasa.service';
import { delay } from 'rxjs';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  apod!: NasaApodResponse;

  constructor(private router: Router,
    private detailService: DetailService) {
    if (!this.detailService.getLastApod()) this.router.navigate(['/']);
    this.apod = this.detailService.getLastApod();
  }

  ngOnInit(): void {
    // this.nasaService.getAPODByDate(this.router.url.split('/')[2])
    //   .pipe(
    //     delay(1000)
    //   ).subscribe({
    //     next: (apod: NasaApodResponse) => {
    //       this.apod = apod;
    //       this.isLoading = false;
    //     },
    //     error: (err) => {
    //       this.router.navigate(['/']);
    //     }
    //   });
  }

  backToDashboard(): void {
    this.detailService.removeLastApod();
    this.router.navigate(['/']);
  }

}
