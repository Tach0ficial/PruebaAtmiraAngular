import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  apod!: NasaApodResponse;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewInDetail() {
    this.router.navigate(['/detail', this.apod.date]);
  }

}
