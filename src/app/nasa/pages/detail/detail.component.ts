import { Component, OnInit } from '@angular/core';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';
import { Router } from '@angular/router';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  apod!: NasaApodResponse;

  constructor(private router: Router,
              private nasaService:NasaService) {}

  ngOnInit(): void {
    this.nasaService.getAPODByDate(this.router.url.split('/')[2]).subscribe(
      (apod: NasaApodResponse) => {
        this.apod = apod;
      }
    )
    
  }

}
