import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lastSixAPOD: NasaApodResponse[] = []
  isLoading = true;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getLastSixAPOD()
      .pipe(
        delay(1000)
      )
      .subscribe({
        next: (res) => {
          this.lastSixAPOD = res;
          this.isLoading = false;
        }
      });
  }
}
