import { Component, OnInit } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  lastSixAPOD:NasaApodResponse[] = []

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getLastSixAPOD()
      .subscribe(res => {this.lastSixAPOD = res});
  }


}
