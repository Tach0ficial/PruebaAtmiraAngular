import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { NasaService } from '../../services/nasa.service';
import { Router } from '@angular/router';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lastSixAPOD: NasaApodResponse[] = []
  isLoading: boolean = true;
  errMsg:string = "Error al consultar la API de la NASA";
  requestErr:boolean = false;

  constructor(private nasaService: NasaService,
              private detailService:DetailService,
              private router: Router) { }

  ngOnInit(): void {
    this.nasaService.getLastSixAPOD()
      .pipe(
        delay(1000)
      )
      .subscribe({
        next: (res) => {
          this.lastSixAPOD = res;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          this.requestErr = true;
        }
      });
  }

  navigateToDetail(apod: NasaApodResponse): void {
    this.router.navigate(['/detail']);
    this.detailService.setLastApod(apod);
  }
}
